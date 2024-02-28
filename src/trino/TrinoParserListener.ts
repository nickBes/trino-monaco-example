// Generated from ./TrinoParser.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ParseContext } from "./TrinoParser.js";
import { StatementsContext } from "./TrinoParser.js";
import { SingleStatementContext } from "./TrinoParser.js";
import { StandaloneExpressionContext } from "./TrinoParser.js";
import { StandalonePathSpecificationContext } from "./TrinoParser.js";
import { StandaloneTypeContext } from "./TrinoParser.js";
import { StandaloneRowPatternContext } from "./TrinoParser.js";
import { StandaloneFunctionSpecificationContext } from "./TrinoParser.js";
import { StatementDefaultContext } from "./TrinoParser.js";
import { UseContext } from "./TrinoParser.js";
import { CreateCatalogContext } from "./TrinoParser.js";
import { DropCatalogContext } from "./TrinoParser.js";
import { CreateSchemaContext } from "./TrinoParser.js";
import { DropSchemaContext } from "./TrinoParser.js";
import { RenameSchemaContext } from "./TrinoParser.js";
import { SetSchemaAuthorizationContext } from "./TrinoParser.js";
import { CreateTableAsSelectContext } from "./TrinoParser.js";
import { CreateTableContext } from "./TrinoParser.js";
import { DropTableContext } from "./TrinoParser.js";
import { InsertIntoContext } from "./TrinoParser.js";
import { DeleteContext } from "./TrinoParser.js";
import { TruncateTableContext } from "./TrinoParser.js";
import { CommentTableContext } from "./TrinoParser.js";
import { CommentViewContext } from "./TrinoParser.js";
import { CommentColumnContext } from "./TrinoParser.js";
import { RenameTableContext } from "./TrinoParser.js";
import { AddColumnContext } from "./TrinoParser.js";
import { RenameColumnContext } from "./TrinoParser.js";
import { DropColumnContext } from "./TrinoParser.js";
import { SetColumnTypeContext } from "./TrinoParser.js";
import { SetTableAuthorizationContext } from "./TrinoParser.js";
import { SetTablePropertiesContext } from "./TrinoParser.js";
import { TableExecuteContext } from "./TrinoParser.js";
import { AnalyzeContext } from "./TrinoParser.js";
import { CreateMaterializedViewContext } from "./TrinoParser.js";
import { CreateViewContext } from "./TrinoParser.js";
import { RefreshMaterializedViewContext } from "./TrinoParser.js";
import { DropMaterializedViewContext } from "./TrinoParser.js";
import { RenameMaterializedViewContext } from "./TrinoParser.js";
import { SetMaterializedViewPropertiesContext } from "./TrinoParser.js";
import { DropViewContext } from "./TrinoParser.js";
import { RenameViewContext } from "./TrinoParser.js";
import { SetViewAuthorizationContext } from "./TrinoParser.js";
import { CallContext } from "./TrinoParser.js";
import { CreateFunctionContext } from "./TrinoParser.js";
import { DropFunctionContext } from "./TrinoParser.js";
import { CreateRoleContext } from "./TrinoParser.js";
import { DropRoleContext } from "./TrinoParser.js";
import { GrantRolesContext } from "./TrinoParser.js";
import { RevokeRolesContext } from "./TrinoParser.js";
import { SetRoleContext } from "./TrinoParser.js";
import { GrantContext } from "./TrinoParser.js";
import { DenyContext } from "./TrinoParser.js";
import { RevokeContext } from "./TrinoParser.js";
import { ShowGrantsContext } from "./TrinoParser.js";
import { ExplainContext } from "./TrinoParser.js";
import { ExplainAnalyzeContext } from "./TrinoParser.js";
import { ShowCreateTableContext } from "./TrinoParser.js";
import { ShowCreateSchemaContext } from "./TrinoParser.js";
import { ShowCreateViewContext } from "./TrinoParser.js";
import { ShowCreateMaterializedViewContext } from "./TrinoParser.js";
import { ShowTablesContext } from "./TrinoParser.js";
import { ShowSchemasContext } from "./TrinoParser.js";
import { ShowCatalogsContext } from "./TrinoParser.js";
import { ShowColumnsContext } from "./TrinoParser.js";
import { ShowStatsContext } from "./TrinoParser.js";
import { ShowStatsForQueryContext } from "./TrinoParser.js";
import { ShowRolesContext } from "./TrinoParser.js";
import { ShowRoleGrantsContext } from "./TrinoParser.js";
import { ShowFunctionsContext } from "./TrinoParser.js";
import { ShowSessionContext } from "./TrinoParser.js";
import { SetSessionAuthorizationContext } from "./TrinoParser.js";
import { ResetSessionAuthorizationContext } from "./TrinoParser.js";
import { SetSessionContext } from "./TrinoParser.js";
import { ResetSessionContext } from "./TrinoParser.js";
import { StartTransactionContext } from "./TrinoParser.js";
import { CommitContext } from "./TrinoParser.js";
import { RollbackContext } from "./TrinoParser.js";
import { PrepareContext } from "./TrinoParser.js";
import { DeallocateContext } from "./TrinoParser.js";
import { ExecuteContext } from "./TrinoParser.js";
import { ExecuteImmediateContext } from "./TrinoParser.js";
import { DescribeInputContext } from "./TrinoParser.js";
import { DescribeOutputContext } from "./TrinoParser.js";
import { SetPathContext } from "./TrinoParser.js";
import { SetTimeZoneContext } from "./TrinoParser.js";
import { UpdateContext } from "./TrinoParser.js";
import { MergeContext } from "./TrinoParser.js";
import { RootQueryContext } from "./TrinoParser.js";
import { WithFunctionContext } from "./TrinoParser.js";
import { QueryContext } from "./TrinoParser.js";
import { WithContext } from "./TrinoParser.js";
import { TableElementContext } from "./TrinoParser.js";
import { ColumnDefinitionContext } from "./TrinoParser.js";
import { LikeClauseContext } from "./TrinoParser.js";
import { PropertiesContext } from "./TrinoParser.js";
import { PropertyAssignmentsContext } from "./TrinoParser.js";
import { PropertyContext } from "./TrinoParser.js";
import { DefaultPropertyValueContext } from "./TrinoParser.js";
import { NonDefaultPropertyValueContext } from "./TrinoParser.js";
import { QueryNoWithContext } from "./TrinoParser.js";
import { LimitRowCountContext } from "./TrinoParser.js";
import { RowCountContext } from "./TrinoParser.js";
import { QueryTermDefaultContext } from "./TrinoParser.js";
import { SetOperationContext } from "./TrinoParser.js";
import { QueryPrimaryDefaultContext } from "./TrinoParser.js";
import { TableContext } from "./TrinoParser.js";
import { InlineTableContext } from "./TrinoParser.js";
import { SubqueryContext } from "./TrinoParser.js";
import { SortItemContext } from "./TrinoParser.js";
import { QuerySpecificationContext } from "./TrinoParser.js";
import { GroupByContext } from "./TrinoParser.js";
import { SingleGroupingSetContext } from "./TrinoParser.js";
import { RollupContext } from "./TrinoParser.js";
import { CubeContext } from "./TrinoParser.js";
import { MultipleGroupingSetsContext } from "./TrinoParser.js";
import { GroupingSetContext } from "./TrinoParser.js";
import { WindowDefinitionContext } from "./TrinoParser.js";
import { WindowSpecificationContext } from "./TrinoParser.js";
import { NamedQueryContext } from "./TrinoParser.js";
import { SetQuantifierContext } from "./TrinoParser.js";
import { SelectSingleContext } from "./TrinoParser.js";
import { SelectAllContext } from "./TrinoParser.js";
import { RelationDefaultContext } from "./TrinoParser.js";
import { JoinRelationContext } from "./TrinoParser.js";
import { JoinTypeContext } from "./TrinoParser.js";
import { JoinCriteriaContext } from "./TrinoParser.js";
import { SampledRelationContext } from "./TrinoParser.js";
import { SampleTypeContext } from "./TrinoParser.js";
import { TrimsSpecificationContext } from "./TrinoParser.js";
import { ListAggOverflowBehaviorContext } from "./TrinoParser.js";
import { ListaggCountIndicationContext } from "./TrinoParser.js";
import { PatternRecognitionContext } from "./TrinoParser.js";
import { MeasureDefinitionContext } from "./TrinoParser.js";
import { RowsPerMatchContext } from "./TrinoParser.js";
import { EmptyMatchHandlingContext } from "./TrinoParser.js";
import { SkipToContext } from "./TrinoParser.js";
import { SubsetDefinitionContext } from "./TrinoParser.js";
import { VariableDefinitionContext } from "./TrinoParser.js";
import { AliasedRelationContext } from "./TrinoParser.js";
import { ColumnAliasesContext } from "./TrinoParser.js";
import { TableNameContext } from "./TrinoParser.js";
import { SubqueryRelationContext } from "./TrinoParser.js";
import { UnnestContext } from "./TrinoParser.js";
import { LateralContext } from "./TrinoParser.js";
import { TableFunctionInvocationContext } from "./TrinoParser.js";
import { ParenthesizedRelationContext } from "./TrinoParser.js";
import { TableFunctionCallContext } from "./TrinoParser.js";
import { TableFunctionArgumentContext } from "./TrinoParser.js";
import { TableArgumentContext } from "./TrinoParser.js";
import { TableArgumentTableContext } from "./TrinoParser.js";
import { TableArgumentQueryContext } from "./TrinoParser.js";
import { DescriptorArgumentContext } from "./TrinoParser.js";
import { DescriptorFieldContext } from "./TrinoParser.js";
import { CopartitionTablesContext } from "./TrinoParser.js";
import { ExpressionContext } from "./TrinoParser.js";
import { LogicalNotContext } from "./TrinoParser.js";
import { PredicatedContext } from "./TrinoParser.js";
import { OrContext } from "./TrinoParser.js";
import { AndContext } from "./TrinoParser.js";
import { ComparisonContext } from "./TrinoParser.js";
import { QuantifiedComparisonContext } from "./TrinoParser.js";
import { BetweenContext } from "./TrinoParser.js";
import { InListContext } from "./TrinoParser.js";
import { InSubqueryContext } from "./TrinoParser.js";
import { LikeContext } from "./TrinoParser.js";
import { NullPredicateContext } from "./TrinoParser.js";
import { DistinctFromContext } from "./TrinoParser.js";
import { ValueExpressionDefaultContext } from "./TrinoParser.js";
import { ConcatenationContext } from "./TrinoParser.js";
import { ArithmeticBinaryContext } from "./TrinoParser.js";
import { ArithmeticUnaryContext } from "./TrinoParser.js";
import { AtTimeZoneContext } from "./TrinoParser.js";
import { DereferenceContext } from "./TrinoParser.js";
import { TypeConstructorContext } from "./TrinoParser.js";
import { JsonValueContext } from "./TrinoParser.js";
import { SpecialDateTimeFunctionContext } from "./TrinoParser.js";
import { SubstringContext } from "./TrinoParser.js";
import { CastContext } from "./TrinoParser.js";
import { LambdaContext } from "./TrinoParser.js";
import { ParenthesizedExpressionContext } from "./TrinoParser.js";
import { TrimContext } from "./TrinoParser.js";
import { ParameterContext } from "./TrinoParser.js";
import { NormalizeContext } from "./TrinoParser.js";
import { JsonObjectContext } from "./TrinoParser.js";
import { IntervalLiteralContext } from "./TrinoParser.js";
import { NumericLiteralContext } from "./TrinoParser.js";
import { BooleanLiteralContext } from "./TrinoParser.js";
import { JsonArrayContext } from "./TrinoParser.js";
import { SimpleCaseContext } from "./TrinoParser.js";
import { ColumnReferenceContext } from "./TrinoParser.js";
import { NullLiteralContext } from "./TrinoParser.js";
import { RowConstructorContext } from "./TrinoParser.js";
import { SubscriptContext } from "./TrinoParser.js";
import { JsonExistsContext } from "./TrinoParser.js";
import { CurrentPathContext } from "./TrinoParser.js";
import { SubqueryExpressionContext } from "./TrinoParser.js";
import { BinaryLiteralContext } from "./TrinoParser.js";
import { CurrentUserContext } from "./TrinoParser.js";
import { JsonQueryContext } from "./TrinoParser.js";
import { MeasureContext } from "./TrinoParser.js";
import { ExtractContext } from "./TrinoParser.js";
import { StringLiteralContext } from "./TrinoParser.js";
import { ArrayConstructorContext } from "./TrinoParser.js";
import { FunctionCallContext } from "./TrinoParser.js";
import { CurrentSchemaContext } from "./TrinoParser.js";
import { ExistsContext } from "./TrinoParser.js";
import { PositionContext } from "./TrinoParser.js";
import { ListaggContext } from "./TrinoParser.js";
import { SearchedCaseContext } from "./TrinoParser.js";
import { CurrentCatalogContext } from "./TrinoParser.js";
import { GroupingOperationContext } from "./TrinoParser.js";
import { JsonPathInvocationContext } from "./TrinoParser.js";
import { JsonValueExpressionContext } from "./TrinoParser.js";
import { JsonRepresentationContext } from "./TrinoParser.js";
import { JsonArgumentContext } from "./TrinoParser.js";
import { JsonExistsErrorBehaviorContext } from "./TrinoParser.js";
import { JsonValueBehaviorContext } from "./TrinoParser.js";
import { JsonQueryWrapperBehaviorContext } from "./TrinoParser.js";
import { JsonQueryBehaviorContext } from "./TrinoParser.js";
import { JsonObjectMemberContext } from "./TrinoParser.js";
import { ProcessingModeContext } from "./TrinoParser.js";
import { NullTreatmentContext } from "./TrinoParser.js";
import { BasicStringLiteralContext } from "./TrinoParser.js";
import { UnicodeStringLiteralContext } from "./TrinoParser.js";
import { TimeZoneIntervalContext } from "./TrinoParser.js";
import { TimeZoneStringContext } from "./TrinoParser.js";
import { ComparisonOperatorContext } from "./TrinoParser.js";
import { ComparisonQuantifierContext } from "./TrinoParser.js";
import { BooleanValueContext } from "./TrinoParser.js";
import { IntervalContext } from "./TrinoParser.js";
import { IntervalFieldContext } from "./TrinoParser.js";
import { NormalFormContext } from "./TrinoParser.js";
import { RowTypeContext } from "./TrinoParser.js";
import { IntervalTypeContext } from "./TrinoParser.js";
import { ArrayTypeContext } from "./TrinoParser.js";
import { DoublePrecisionTypeContext } from "./TrinoParser.js";
import { LegacyArrayTypeContext } from "./TrinoParser.js";
import { GenericTypeContext } from "./TrinoParser.js";
import { DateTimeTypeContext } from "./TrinoParser.js";
import { LegacyMapTypeContext } from "./TrinoParser.js";
import { RowFieldContext } from "./TrinoParser.js";
import { TypeParameterContext } from "./TrinoParser.js";
import { WhenClauseContext } from "./TrinoParser.js";
import { FilterContext } from "./TrinoParser.js";
import { MergeUpdateContext } from "./TrinoParser.js";
import { MergeDeleteContext } from "./TrinoParser.js";
import { MergeInsertContext } from "./TrinoParser.js";
import { OverContext } from "./TrinoParser.js";
import { WindowFrameContext } from "./TrinoParser.js";
import { FrameExtentContext } from "./TrinoParser.js";
import { UnboundedFrameContext } from "./TrinoParser.js";
import { CurrentRowBoundContext } from "./TrinoParser.js";
import { BoundedFrameContext } from "./TrinoParser.js";
import { QuantifiedPrimaryContext } from "./TrinoParser.js";
import { PatternConcatenationContext } from "./TrinoParser.js";
import { PatternAlternationContext } from "./TrinoParser.js";
import { PatternVariableContext } from "./TrinoParser.js";
import { EmptyPatternContext } from "./TrinoParser.js";
import { PatternPermutationContext } from "./TrinoParser.js";
import { GroupedPatternContext } from "./TrinoParser.js";
import { PartitionStartAnchorContext } from "./TrinoParser.js";
import { PartitionEndAnchorContext } from "./TrinoParser.js";
import { ExcludedPatternContext } from "./TrinoParser.js";
import { ZeroOrMoreQuantifierContext } from "./TrinoParser.js";
import { OneOrMoreQuantifierContext } from "./TrinoParser.js";
import { ZeroOrOneQuantifierContext } from "./TrinoParser.js";
import { RangeQuantifierContext } from "./TrinoParser.js";
import { UpdateAssignmentContext } from "./TrinoParser.js";
import { ExplainFormatContext } from "./TrinoParser.js";
import { ExplainTypeContext } from "./TrinoParser.js";
import { IsolationLevelContext } from "./TrinoParser.js";
import { TransactionAccessModeContext } from "./TrinoParser.js";
import { ReadUncommittedContext } from "./TrinoParser.js";
import { ReadCommittedContext } from "./TrinoParser.js";
import { RepeatableReadContext } from "./TrinoParser.js";
import { SerializableContext } from "./TrinoParser.js";
import { PositionalArgumentContext } from "./TrinoParser.js";
import { NamedArgumentContext } from "./TrinoParser.js";
import { QualifiedArgumentContext } from "./TrinoParser.js";
import { UnqualifiedArgumentContext } from "./TrinoParser.js";
import { PathSpecificationContext } from "./TrinoParser.js";
import { FunctionSpecificationContext } from "./TrinoParser.js";
import { FunctionDeclarationContext } from "./TrinoParser.js";
import { ParameterDeclarationContext } from "./TrinoParser.js";
import { ReturnsClauseContext } from "./TrinoParser.js";
import { LanguageCharacteristicContext } from "./TrinoParser.js";
import { DeterministicCharacteristicContext } from "./TrinoParser.js";
import { ReturnsNullOnNullInputCharacteristicContext } from "./TrinoParser.js";
import { CalledOnNullInputCharacteristicContext } from "./TrinoParser.js";
import { SecurityCharacteristicContext } from "./TrinoParser.js";
import { CommentCharacteristicContext } from "./TrinoParser.js";
import { ReturnStatementContext } from "./TrinoParser.js";
import { AssignmentStatementContext } from "./TrinoParser.js";
import { SimpleCaseStatementContext } from "./TrinoParser.js";
import { SearchedCaseStatementContext } from "./TrinoParser.js";
import { IfStatementContext } from "./TrinoParser.js";
import { IterateStatementContext } from "./TrinoParser.js";
import { LeaveStatementContext } from "./TrinoParser.js";
import { CompoundStatementContext } from "./TrinoParser.js";
import { LoopStatementContext } from "./TrinoParser.js";
import { WhileStatementContext } from "./TrinoParser.js";
import { RepeatStatementContext } from "./TrinoParser.js";
import { CaseStatementWhenClauseContext } from "./TrinoParser.js";
import { ElseIfClauseContext } from "./TrinoParser.js";
import { ElseClauseContext } from "./TrinoParser.js";
import { VariableDeclarationContext } from "./TrinoParser.js";
import { SqlStatementListContext } from "./TrinoParser.js";
import { PrivilegeContext } from "./TrinoParser.js";
import { QualifiedNameContext } from "./TrinoParser.js";
import { QueryPeriodContext } from "./TrinoParser.js";
import { RangeTypeContext } from "./TrinoParser.js";
import { SpecifiedPrincipalContext } from "./TrinoParser.js";
import { CurrentUserGrantorContext } from "./TrinoParser.js";
import { CurrentRoleGrantorContext } from "./TrinoParser.js";
import { UnspecifiedPrincipalContext } from "./TrinoParser.js";
import { UserPrincipalContext } from "./TrinoParser.js";
import { RolePrincipalContext } from "./TrinoParser.js";
import { RolesContext } from "./TrinoParser.js";
import { UnquotedIdentifierContext } from "./TrinoParser.js";
import { QuotedIdentifierContext } from "./TrinoParser.js";
import { BackQuotedIdentifierContext } from "./TrinoParser.js";
import { DigitIdentifierContext } from "./TrinoParser.js";
import { DecimalLiteralContext } from "./TrinoParser.js";
import { DoubleLiteralContext } from "./TrinoParser.js";
import { IntegerLiteralContext } from "./TrinoParser.js";
import { IdentifierUserContext } from "./TrinoParser.js";
import { StringUserContext } from "./TrinoParser.js";
import { NonReservedContext } from "./TrinoParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TrinoParser`.
 */
export class TrinoParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `TrinoParser.parse`.
     * @param ctx the parse tree
     */
    enterParse?: (ctx: ParseContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.parse`.
     * @param ctx the parse tree
     */
    exitParse?: (ctx: ParseContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.statements`.
     * @param ctx the parse tree
     */
    enterStatements?: (ctx: StatementsContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.statements`.
     * @param ctx the parse tree
     */
    exitStatements?: (ctx: StatementsContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.singleStatement`.
     * @param ctx the parse tree
     */
    enterSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.singleStatement`.
     * @param ctx the parse tree
     */
    exitSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.standaloneExpression`.
     * @param ctx the parse tree
     */
    enterStandaloneExpression?: (ctx: StandaloneExpressionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.standaloneExpression`.
     * @param ctx the parse tree
     */
    exitStandaloneExpression?: (ctx: StandaloneExpressionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.standalonePathSpecification`.
     * @param ctx the parse tree
     */
    enterStandalonePathSpecification?: (ctx: StandalonePathSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.standalonePathSpecification`.
     * @param ctx the parse tree
     */
    exitStandalonePathSpecification?: (ctx: StandalonePathSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.standaloneType`.
     * @param ctx the parse tree
     */
    enterStandaloneType?: (ctx: StandaloneTypeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.standaloneType`.
     * @param ctx the parse tree
     */
    exitStandaloneType?: (ctx: StandaloneTypeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.standaloneRowPattern`.
     * @param ctx the parse tree
     */
    enterStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.standaloneRowPattern`.
     * @param ctx the parse tree
     */
    exitStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.standaloneFunctionSpecification`.
     * @param ctx the parse tree
     */
    enterStandaloneFunctionSpecification?: (ctx: StandaloneFunctionSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.standaloneFunctionSpecification`.
     * @param ctx the parse tree
     */
    exitStandaloneFunctionSpecification?: (ctx: StandaloneFunctionSpecificationContext) => void;
    /**
     * Enter a parse tree produced by the `statementDefault`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `statementDefault`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `use`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterUse?: (ctx: UseContext) => void;
    /**
     * Exit a parse tree produced by the `use`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitUse?: (ctx: UseContext) => void;
    /**
     * Enter a parse tree produced by the `createCatalog`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateCatalog?: (ctx: CreateCatalogContext) => void;
    /**
     * Exit a parse tree produced by the `createCatalog`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateCatalog?: (ctx: CreateCatalogContext) => void;
    /**
     * Enter a parse tree produced by the `dropCatalog`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterDropCatalog?: (ctx: DropCatalogContext) => void;
    /**
     * Exit a parse tree produced by the `dropCatalog`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitDropCatalog?: (ctx: DropCatalogContext) => void;
    /**
     * Enter a parse tree produced by the `createSchema`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateSchema?: (ctx: CreateSchemaContext) => void;
    /**
     * Exit a parse tree produced by the `createSchema`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateSchema?: (ctx: CreateSchemaContext) => void;
    /**
     * Enter a parse tree produced by the `dropSchema`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterDropSchema?: (ctx: DropSchemaContext) => void;
    /**
     * Exit a parse tree produced by the `dropSchema`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitDropSchema?: (ctx: DropSchemaContext) => void;
    /**
     * Enter a parse tree produced by the `renameSchema`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameSchema?: (ctx: RenameSchemaContext) => void;
    /**
     * Exit a parse tree produced by the `renameSchema`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameSchema?: (ctx: RenameSchemaContext) => void;
    /**
     * Enter a parse tree produced by the `setSchemaAuthorization`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterSetSchemaAuthorization?: (ctx: SetSchemaAuthorizationContext) => void;
    /**
     * Exit a parse tree produced by the `setSchemaAuthorization`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitSetSchemaAuthorization?: (ctx: SetSchemaAuthorizationContext) => void;
    /**
     * Enter a parse tree produced by the `createTableAsSelect`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => void;
    /**
     * Exit a parse tree produced by the `createTableAsSelect`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => void;
    /**
     * Enter a parse tree produced by the `createTable`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `createTable`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `dropTable`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterDropTable?: (ctx: DropTableContext) => void;
    /**
     * Exit a parse tree produced by the `dropTable`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitDropTable?: (ctx: DropTableContext) => void;
    /**
     * Enter a parse tree produced by the `insertInto`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterInsertInto?: (ctx: InsertIntoContext) => void;
    /**
     * Exit a parse tree produced by the `insertInto`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitInsertInto?: (ctx: InsertIntoContext) => void;
    /**
     * Enter a parse tree produced by the `delete`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterDelete?: (ctx: DeleteContext) => void;
    /**
     * Exit a parse tree produced by the `delete`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitDelete?: (ctx: DeleteContext) => void;
    /**
     * Enter a parse tree produced by the `truncateTable`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Exit a parse tree produced by the `truncateTable`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Enter a parse tree produced by the `commentTable`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterCommentTable?: (ctx: CommentTableContext) => void;
    /**
     * Exit a parse tree produced by the `commentTable`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitCommentTable?: (ctx: CommentTableContext) => void;
    /**
     * Enter a parse tree produced by the `commentView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterCommentView?: (ctx: CommentViewContext) => void;
    /**
     * Exit a parse tree produced by the `commentView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitCommentView?: (ctx: CommentViewContext) => void;
    /**
     * Enter a parse tree produced by the `commentColumn`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterCommentColumn?: (ctx: CommentColumnContext) => void;
    /**
     * Exit a parse tree produced by the `commentColumn`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitCommentColumn?: (ctx: CommentColumnContext) => void;
    /**
     * Enter a parse tree produced by the `renameTable`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Exit a parse tree produced by the `renameTable`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Enter a parse tree produced by the `addColumn`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterAddColumn?: (ctx: AddColumnContext) => void;
    /**
     * Exit a parse tree produced by the `addColumn`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitAddColumn?: (ctx: AddColumnContext) => void;
    /**
     * Enter a parse tree produced by the `renameColumn`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameColumn?: (ctx: RenameColumnContext) => void;
    /**
     * Exit a parse tree produced by the `renameColumn`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameColumn?: (ctx: RenameColumnContext) => void;
    /**
     * Enter a parse tree produced by the `dropColumn`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterDropColumn?: (ctx: DropColumnContext) => void;
    /**
     * Exit a parse tree produced by the `dropColumn`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitDropColumn?: (ctx: DropColumnContext) => void;
    /**
     * Enter a parse tree produced by the `setColumnType`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterSetColumnType?: (ctx: SetColumnTypeContext) => void;
    /**
     * Exit a parse tree produced by the `setColumnType`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitSetColumnType?: (ctx: SetColumnTypeContext) => void;
    /**
     * Enter a parse tree produced by the `setTableAuthorization`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTableAuthorization?: (ctx: SetTableAuthorizationContext) => void;
    /**
     * Exit a parse tree produced by the `setTableAuthorization`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTableAuthorization?: (ctx: SetTableAuthorizationContext) => void;
    /**
     * Enter a parse tree produced by the `setTableProperties`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTableProperties?: (ctx: SetTablePropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `setTableProperties`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTableProperties?: (ctx: SetTablePropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `tableExecute`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterTableExecute?: (ctx: TableExecuteContext) => void;
    /**
     * Exit a parse tree produced by the `tableExecute`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitTableExecute?: (ctx: TableExecuteContext) => void;
    /**
     * Enter a parse tree produced by the `analyze`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterAnalyze?: (ctx: AnalyzeContext) => void;
    /**
     * Exit a parse tree produced by the `analyze`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitAnalyze?: (ctx: AnalyzeContext) => void;
    /**
     * Enter a parse tree produced by the `createMaterializedView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `createMaterializedView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `createView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Exit a parse tree produced by the `createView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Enter a parse tree produced by the `refreshMaterializedView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `refreshMaterializedView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `dropMaterializedView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterDropMaterializedView?: (ctx: DropMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `dropMaterializedView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitDropMaterializedView?: (ctx: DropMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `renameMaterializedView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameMaterializedView?: (ctx: RenameMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `renameMaterializedView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameMaterializedView?: (ctx: RenameMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `setMaterializedViewProperties`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterSetMaterializedViewProperties?: (ctx: SetMaterializedViewPropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `setMaterializedViewProperties`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitSetMaterializedViewProperties?: (ctx: SetMaterializedViewPropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `dropView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterDropView?: (ctx: DropViewContext) => void;
    /**
     * Exit a parse tree produced by the `dropView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitDropView?: (ctx: DropViewContext) => void;
    /**
     * Enter a parse tree produced by the `renameView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameView?: (ctx: RenameViewContext) => void;
    /**
     * Exit a parse tree produced by the `renameView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameView?: (ctx: RenameViewContext) => void;
    /**
     * Enter a parse tree produced by the `setViewAuthorization`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterSetViewAuthorization?: (ctx: SetViewAuthorizationContext) => void;
    /**
     * Exit a parse tree produced by the `setViewAuthorization`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitSetViewAuthorization?: (ctx: SetViewAuthorizationContext) => void;
    /**
     * Enter a parse tree produced by the `call`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterCall?: (ctx: CallContext) => void;
    /**
     * Exit a parse tree produced by the `call`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitCall?: (ctx: CallContext) => void;
    /**
     * Enter a parse tree produced by the `createFunction`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `createFunction`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `dropFunction`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `dropFunction`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `createRole`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateRole?: (ctx: CreateRoleContext) => void;
    /**
     * Exit a parse tree produced by the `createRole`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateRole?: (ctx: CreateRoleContext) => void;
    /**
     * Enter a parse tree produced by the `dropRole`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterDropRole?: (ctx: DropRoleContext) => void;
    /**
     * Exit a parse tree produced by the `dropRole`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitDropRole?: (ctx: DropRoleContext) => void;
    /**
     * Enter a parse tree produced by the `grantRoles`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterGrantRoles?: (ctx: GrantRolesContext) => void;
    /**
     * Exit a parse tree produced by the `grantRoles`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitGrantRoles?: (ctx: GrantRolesContext) => void;
    /**
     * Enter a parse tree produced by the `revokeRoles`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterRevokeRoles?: (ctx: RevokeRolesContext) => void;
    /**
     * Exit a parse tree produced by the `revokeRoles`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitRevokeRoles?: (ctx: RevokeRolesContext) => void;
    /**
     * Enter a parse tree produced by the `setRole`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterSetRole?: (ctx: SetRoleContext) => void;
    /**
     * Exit a parse tree produced by the `setRole`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitSetRole?: (ctx: SetRoleContext) => void;
    /**
     * Enter a parse tree produced by the `grant`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterGrant?: (ctx: GrantContext) => void;
    /**
     * Exit a parse tree produced by the `grant`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitGrant?: (ctx: GrantContext) => void;
    /**
     * Enter a parse tree produced by the `deny`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterDeny?: (ctx: DenyContext) => void;
    /**
     * Exit a parse tree produced by the `deny`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitDeny?: (ctx: DenyContext) => void;
    /**
     * Enter a parse tree produced by the `revoke`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterRevoke?: (ctx: RevokeContext) => void;
    /**
     * Exit a parse tree produced by the `revoke`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitRevoke?: (ctx: RevokeContext) => void;
    /**
     * Enter a parse tree produced by the `showGrants`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterShowGrants?: (ctx: ShowGrantsContext) => void;
    /**
     * Exit a parse tree produced by the `showGrants`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitShowGrants?: (ctx: ShowGrantsContext) => void;
    /**
     * Enter a parse tree produced by the `explain`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterExplain?: (ctx: ExplainContext) => void;
    /**
     * Exit a parse tree produced by the `explain`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitExplain?: (ctx: ExplainContext) => void;
    /**
     * Enter a parse tree produced by the `explainAnalyze`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterExplainAnalyze?: (ctx: ExplainAnalyzeContext) => void;
    /**
     * Exit a parse tree produced by the `explainAnalyze`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitExplainAnalyze?: (ctx: ExplainAnalyzeContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateTable`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateTable?: (ctx: ShowCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateTable`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateTable?: (ctx: ShowCreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateSchema`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateSchema?: (ctx: ShowCreateSchemaContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateSchema`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateSchema?: (ctx: ShowCreateSchemaContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateView?: (ctx: ShowCreateViewContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateView?: (ctx: ShowCreateViewContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `showTables`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterShowTables?: (ctx: ShowTablesContext) => void;
    /**
     * Exit a parse tree produced by the `showTables`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitShowTables?: (ctx: ShowTablesContext) => void;
    /**
     * Enter a parse tree produced by the `showSchemas`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterShowSchemas?: (ctx: ShowSchemasContext) => void;
    /**
     * Exit a parse tree produced by the `showSchemas`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitShowSchemas?: (ctx: ShowSchemasContext) => void;
    /**
     * Enter a parse tree produced by the `showCatalogs`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCatalogs?: (ctx: ShowCatalogsContext) => void;
    /**
     * Exit a parse tree produced by the `showCatalogs`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCatalogs?: (ctx: ShowCatalogsContext) => void;
    /**
     * Enter a parse tree produced by the `showColumns`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `showColumns`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `showStats`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterShowStats?: (ctx: ShowStatsContext) => void;
    /**
     * Exit a parse tree produced by the `showStats`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitShowStats?: (ctx: ShowStatsContext) => void;
    /**
     * Enter a parse tree produced by the `showStatsForQuery`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterShowStatsForQuery?: (ctx: ShowStatsForQueryContext) => void;
    /**
     * Exit a parse tree produced by the `showStatsForQuery`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitShowStatsForQuery?: (ctx: ShowStatsForQueryContext) => void;
    /**
     * Enter a parse tree produced by the `showRoles`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterShowRoles?: (ctx: ShowRolesContext) => void;
    /**
     * Exit a parse tree produced by the `showRoles`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitShowRoles?: (ctx: ShowRolesContext) => void;
    /**
     * Enter a parse tree produced by the `showRoleGrants`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;
    /**
     * Exit a parse tree produced by the `showRoleGrants`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;
    /**
     * Enter a parse tree produced by the `showFunctions`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Exit a parse tree produced by the `showFunctions`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Enter a parse tree produced by the `showSession`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterShowSession?: (ctx: ShowSessionContext) => void;
    /**
     * Exit a parse tree produced by the `showSession`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitShowSession?: (ctx: ShowSessionContext) => void;
    /**
     * Enter a parse tree produced by the `setSessionAuthorization`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterSetSessionAuthorization?: (ctx: SetSessionAuthorizationContext) => void;
    /**
     * Exit a parse tree produced by the `setSessionAuthorization`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitSetSessionAuthorization?: (ctx: SetSessionAuthorizationContext) => void;
    /**
     * Enter a parse tree produced by the `resetSessionAuthorization`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterResetSessionAuthorization?: (ctx: ResetSessionAuthorizationContext) => void;
    /**
     * Exit a parse tree produced by the `resetSessionAuthorization`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitResetSessionAuthorization?: (ctx: ResetSessionAuthorizationContext) => void;
    /**
     * Enter a parse tree produced by the `setSession`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterSetSession?: (ctx: SetSessionContext) => void;
    /**
     * Exit a parse tree produced by the `setSession`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitSetSession?: (ctx: SetSessionContext) => void;
    /**
     * Enter a parse tree produced by the `resetSession`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterResetSession?: (ctx: ResetSessionContext) => void;
    /**
     * Exit a parse tree produced by the `resetSession`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitResetSession?: (ctx: ResetSessionContext) => void;
    /**
     * Enter a parse tree produced by the `startTransaction`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterStartTransaction?: (ctx: StartTransactionContext) => void;
    /**
     * Exit a parse tree produced by the `startTransaction`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitStartTransaction?: (ctx: StartTransactionContext) => void;
    /**
     * Enter a parse tree produced by the `commit`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterCommit?: (ctx: CommitContext) => void;
    /**
     * Exit a parse tree produced by the `commit`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitCommit?: (ctx: CommitContext) => void;
    /**
     * Enter a parse tree produced by the `rollback`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterRollback?: (ctx: RollbackContext) => void;
    /**
     * Exit a parse tree produced by the `rollback`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitRollback?: (ctx: RollbackContext) => void;
    /**
     * Enter a parse tree produced by the `prepare`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterPrepare?: (ctx: PrepareContext) => void;
    /**
     * Exit a parse tree produced by the `prepare`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitPrepare?: (ctx: PrepareContext) => void;
    /**
     * Enter a parse tree produced by the `deallocate`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterDeallocate?: (ctx: DeallocateContext) => void;
    /**
     * Exit a parse tree produced by the `deallocate`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitDeallocate?: (ctx: DeallocateContext) => void;
    /**
     * Enter a parse tree produced by the `execute`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterExecute?: (ctx: ExecuteContext) => void;
    /**
     * Exit a parse tree produced by the `execute`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitExecute?: (ctx: ExecuteContext) => void;
    /**
     * Enter a parse tree produced by the `executeImmediate`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterExecuteImmediate?: (ctx: ExecuteImmediateContext) => void;
    /**
     * Exit a parse tree produced by the `executeImmediate`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitExecuteImmediate?: (ctx: ExecuteImmediateContext) => void;
    /**
     * Enter a parse tree produced by the `describeInput`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeInput?: (ctx: DescribeInputContext) => void;
    /**
     * Exit a parse tree produced by the `describeInput`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeInput?: (ctx: DescribeInputContext) => void;
    /**
     * Enter a parse tree produced by the `describeOutput`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeOutput?: (ctx: DescribeOutputContext) => void;
    /**
     * Exit a parse tree produced by the `describeOutput`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeOutput?: (ctx: DescribeOutputContext) => void;
    /**
     * Enter a parse tree produced by the `setPath`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterSetPath?: (ctx: SetPathContext) => void;
    /**
     * Exit a parse tree produced by the `setPath`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitSetPath?: (ctx: SetPathContext) => void;
    /**
     * Enter a parse tree produced by the `setTimeZone`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTimeZone?: (ctx: SetTimeZoneContext) => void;
    /**
     * Exit a parse tree produced by the `setTimeZone`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTimeZone?: (ctx: SetTimeZoneContext) => void;
    /**
     * Enter a parse tree produced by the `update`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterUpdate?: (ctx: UpdateContext) => void;
    /**
     * Exit a parse tree produced by the `update`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitUpdate?: (ctx: UpdateContext) => void;
    /**
     * Enter a parse tree produced by the `merge`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    enterMerge?: (ctx: MergeContext) => void;
    /**
     * Exit a parse tree produced by the `merge`
     * labeled alternative in `TrinoParser.statement`.
     * @param ctx the parse tree
     */
    exitMerge?: (ctx: MergeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.rootQuery`.
     * @param ctx the parse tree
     */
    enterRootQuery?: (ctx: RootQueryContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.rootQuery`.
     * @param ctx the parse tree
     */
    exitRootQuery?: (ctx: RootQueryContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.withFunction`.
     * @param ctx the parse tree
     */
    enterWithFunction?: (ctx: WithFunctionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.withFunction`.
     * @param ctx the parse tree
     */
    exitWithFunction?: (ctx: WithFunctionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.query`.
     * @param ctx the parse tree
     */
    enterQuery?: (ctx: QueryContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.query`.
     * @param ctx the parse tree
     */
    exitQuery?: (ctx: QueryContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.with`.
     * @param ctx the parse tree
     */
    enterWith?: (ctx: WithContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.with`.
     * @param ctx the parse tree
     */
    exitWith?: (ctx: WithContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.tableElement`.
     * @param ctx the parse tree
     */
    enterTableElement?: (ctx: TableElementContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.tableElement`.
     * @param ctx the parse tree
     */
    exitTableElement?: (ctx: TableElementContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.columnDefinition`.
     * @param ctx the parse tree
     */
    enterColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.columnDefinition`.
     * @param ctx the parse tree
     */
    exitColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.likeClause`.
     * @param ctx the parse tree
     */
    enterLikeClause?: (ctx: LikeClauseContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.likeClause`.
     * @param ctx the parse tree
     */
    exitLikeClause?: (ctx: LikeClauseContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.properties`.
     * @param ctx the parse tree
     */
    enterProperties?: (ctx: PropertiesContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.properties`.
     * @param ctx the parse tree
     */
    exitProperties?: (ctx: PropertiesContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.propertyAssignments`.
     * @param ctx the parse tree
     */
    enterPropertyAssignments?: (ctx: PropertyAssignmentsContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.propertyAssignments`.
     * @param ctx the parse tree
     */
    exitPropertyAssignments?: (ctx: PropertyAssignmentsContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.property`.
     * @param ctx the parse tree
     */
    enterProperty?: (ctx: PropertyContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.property`.
     * @param ctx the parse tree
     */
    exitProperty?: (ctx: PropertyContext) => void;
    /**
     * Enter a parse tree produced by the `defaultPropertyValue`
     * labeled alternative in `TrinoParser.propertyValue`.
     * @param ctx the parse tree
     */
    enterDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => void;
    /**
     * Exit a parse tree produced by the `defaultPropertyValue`
     * labeled alternative in `TrinoParser.propertyValue`.
     * @param ctx the parse tree
     */
    exitDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => void;
    /**
     * Enter a parse tree produced by the `nonDefaultPropertyValue`
     * labeled alternative in `TrinoParser.propertyValue`.
     * @param ctx the parse tree
     */
    enterNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => void;
    /**
     * Exit a parse tree produced by the `nonDefaultPropertyValue`
     * labeled alternative in `TrinoParser.propertyValue`.
     * @param ctx the parse tree
     */
    exitNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.queryNoWith`.
     * @param ctx the parse tree
     */
    enterQueryNoWith?: (ctx: QueryNoWithContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.queryNoWith`.
     * @param ctx the parse tree
     */
    exitQueryNoWith?: (ctx: QueryNoWithContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.limitRowCount`.
     * @param ctx the parse tree
     */
    enterLimitRowCount?: (ctx: LimitRowCountContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.limitRowCount`.
     * @param ctx the parse tree
     */
    exitLimitRowCount?: (ctx: LimitRowCountContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.rowCount`.
     * @param ctx the parse tree
     */
    enterRowCount?: (ctx: RowCountContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.rowCount`.
     * @param ctx the parse tree
     */
    exitRowCount?: (ctx: RowCountContext) => void;
    /**
     * Enter a parse tree produced by the `queryTermDefault`
     * labeled alternative in `TrinoParser.queryTerm`.
     * @param ctx the parse tree
     */
    enterQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `queryTermDefault`
     * labeled alternative in `TrinoParser.queryTerm`.
     * @param ctx the parse tree
     */
    exitQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `setOperation`
     * labeled alternative in `TrinoParser.queryTerm`.
     * @param ctx the parse tree
     */
    enterSetOperation?: (ctx: SetOperationContext) => void;
    /**
     * Exit a parse tree produced by the `setOperation`
     * labeled alternative in `TrinoParser.queryTerm`.
     * @param ctx the parse tree
     */
    exitSetOperation?: (ctx: SetOperationContext) => void;
    /**
     * Enter a parse tree produced by the `queryPrimaryDefault`
     * labeled alternative in `TrinoParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `queryPrimaryDefault`
     * labeled alternative in `TrinoParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `table`
     * labeled alternative in `TrinoParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterTable?: (ctx: TableContext) => void;
    /**
     * Exit a parse tree produced by the `table`
     * labeled alternative in `TrinoParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitTable?: (ctx: TableContext) => void;
    /**
     * Enter a parse tree produced by the `inlineTable`
     * labeled alternative in `TrinoParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterInlineTable?: (ctx: InlineTableContext) => void;
    /**
     * Exit a parse tree produced by the `inlineTable`
     * labeled alternative in `TrinoParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitInlineTable?: (ctx: InlineTableContext) => void;
    /**
     * Enter a parse tree produced by the `subquery`
     * labeled alternative in `TrinoParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterSubquery?: (ctx: SubqueryContext) => void;
    /**
     * Exit a parse tree produced by the `subquery`
     * labeled alternative in `TrinoParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitSubquery?: (ctx: SubqueryContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.sortItem`.
     * @param ctx the parse tree
     */
    enterSortItem?: (ctx: SortItemContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.sortItem`.
     * @param ctx the parse tree
     */
    exitSortItem?: (ctx: SortItemContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.querySpecification`.
     * @param ctx the parse tree
     */
    enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.querySpecification`.
     * @param ctx the parse tree
     */
    exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.groupBy`.
     * @param ctx the parse tree
     */
    enterGroupBy?: (ctx: GroupByContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.groupBy`.
     * @param ctx the parse tree
     */
    exitGroupBy?: (ctx: GroupByContext) => void;
    /**
     * Enter a parse tree produced by the `singleGroupingSet`
     * labeled alternative in `TrinoParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;
    /**
     * Exit a parse tree produced by the `singleGroupingSet`
     * labeled alternative in `TrinoParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;
    /**
     * Enter a parse tree produced by the `rollup`
     * labeled alternative in `TrinoParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterRollup?: (ctx: RollupContext) => void;
    /**
     * Exit a parse tree produced by the `rollup`
     * labeled alternative in `TrinoParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitRollup?: (ctx: RollupContext) => void;
    /**
     * Enter a parse tree produced by the `cube`
     * labeled alternative in `TrinoParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterCube?: (ctx: CubeContext) => void;
    /**
     * Exit a parse tree produced by the `cube`
     * labeled alternative in `TrinoParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitCube?: (ctx: CubeContext) => void;
    /**
     * Enter a parse tree produced by the `multipleGroupingSets`
     * labeled alternative in `TrinoParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => void;
    /**
     * Exit a parse tree produced by the `multipleGroupingSets`
     * labeled alternative in `TrinoParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.groupingSet`.
     * @param ctx the parse tree
     */
    enterGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.groupingSet`.
     * @param ctx the parse tree
     */
    exitGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.windowDefinition`.
     * @param ctx the parse tree
     */
    enterWindowDefinition?: (ctx: WindowDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.windowDefinition`.
     * @param ctx the parse tree
     */
    exitWindowDefinition?: (ctx: WindowDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.windowSpecification`.
     * @param ctx the parse tree
     */
    enterWindowSpecification?: (ctx: WindowSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.windowSpecification`.
     * @param ctx the parse tree
     */
    exitWindowSpecification?: (ctx: WindowSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.namedQuery`.
     * @param ctx the parse tree
     */
    enterNamedQuery?: (ctx: NamedQueryContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.namedQuery`.
     * @param ctx the parse tree
     */
    exitNamedQuery?: (ctx: NamedQueryContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.setQuantifier`.
     * @param ctx the parse tree
     */
    enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.setQuantifier`.
     * @param ctx the parse tree
     */
    exitSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `selectSingle`
     * labeled alternative in `TrinoParser.selectItem`.
     * @param ctx the parse tree
     */
    enterSelectSingle?: (ctx: SelectSingleContext) => void;
    /**
     * Exit a parse tree produced by the `selectSingle`
     * labeled alternative in `TrinoParser.selectItem`.
     * @param ctx the parse tree
     */
    exitSelectSingle?: (ctx: SelectSingleContext) => void;
    /**
     * Enter a parse tree produced by the `selectAll`
     * labeled alternative in `TrinoParser.selectItem`.
     * @param ctx the parse tree
     */
    enterSelectAll?: (ctx: SelectAllContext) => void;
    /**
     * Exit a parse tree produced by the `selectAll`
     * labeled alternative in `TrinoParser.selectItem`.
     * @param ctx the parse tree
     */
    exitSelectAll?: (ctx: SelectAllContext) => void;
    /**
     * Enter a parse tree produced by the `relationDefault`
     * labeled alternative in `TrinoParser.relation`.
     * @param ctx the parse tree
     */
    enterRelationDefault?: (ctx: RelationDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `relationDefault`
     * labeled alternative in `TrinoParser.relation`.
     * @param ctx the parse tree
     */
    exitRelationDefault?: (ctx: RelationDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `joinRelation`
     * labeled alternative in `TrinoParser.relation`.
     * @param ctx the parse tree
     */
    enterJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Exit a parse tree produced by the `joinRelation`
     * labeled alternative in `TrinoParser.relation`.
     * @param ctx the parse tree
     */
    exitJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.joinType`.
     * @param ctx the parse tree
     */
    enterJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.joinType`.
     * @param ctx the parse tree
     */
    exitJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.joinCriteria`.
     * @param ctx the parse tree
     */
    enterJoinCriteria?: (ctx: JoinCriteriaContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.joinCriteria`.
     * @param ctx the parse tree
     */
    exitJoinCriteria?: (ctx: JoinCriteriaContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.sampledRelation`.
     * @param ctx the parse tree
     */
    enterSampledRelation?: (ctx: SampledRelationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.sampledRelation`.
     * @param ctx the parse tree
     */
    exitSampledRelation?: (ctx: SampledRelationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.sampleType`.
     * @param ctx the parse tree
     */
    enterSampleType?: (ctx: SampleTypeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.sampleType`.
     * @param ctx the parse tree
     */
    exitSampleType?: (ctx: SampleTypeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.trimsSpecification`.
     * @param ctx the parse tree
     */
    enterTrimsSpecification?: (ctx: TrimsSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.trimsSpecification`.
     * @param ctx the parse tree
     */
    exitTrimsSpecification?: (ctx: TrimsSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.listAggOverflowBehavior`.
     * @param ctx the parse tree
     */
    enterListAggOverflowBehavior?: (ctx: ListAggOverflowBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.listAggOverflowBehavior`.
     * @param ctx the parse tree
     */
    exitListAggOverflowBehavior?: (ctx: ListAggOverflowBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.listaggCountIndication`.
     * @param ctx the parse tree
     */
    enterListaggCountIndication?: (ctx: ListaggCountIndicationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.listaggCountIndication`.
     * @param ctx the parse tree
     */
    exitListaggCountIndication?: (ctx: ListaggCountIndicationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.patternRecognition`.
     * @param ctx the parse tree
     */
    enterPatternRecognition?: (ctx: PatternRecognitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.patternRecognition`.
     * @param ctx the parse tree
     */
    exitPatternRecognition?: (ctx: PatternRecognitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.measureDefinition`.
     * @param ctx the parse tree
     */
    enterMeasureDefinition?: (ctx: MeasureDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.measureDefinition`.
     * @param ctx the parse tree
     */
    exitMeasureDefinition?: (ctx: MeasureDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.rowsPerMatch`.
     * @param ctx the parse tree
     */
    enterRowsPerMatch?: (ctx: RowsPerMatchContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.rowsPerMatch`.
     * @param ctx the parse tree
     */
    exitRowsPerMatch?: (ctx: RowsPerMatchContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.emptyMatchHandling`.
     * @param ctx the parse tree
     */
    enterEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.emptyMatchHandling`.
     * @param ctx the parse tree
     */
    exitEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.skipTo`.
     * @param ctx the parse tree
     */
    enterSkipTo?: (ctx: SkipToContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.skipTo`.
     * @param ctx the parse tree
     */
    exitSkipTo?: (ctx: SkipToContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.subsetDefinition`.
     * @param ctx the parse tree
     */
    enterSubsetDefinition?: (ctx: SubsetDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.subsetDefinition`.
     * @param ctx the parse tree
     */
    exitSubsetDefinition?: (ctx: SubsetDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.variableDefinition`.
     * @param ctx the parse tree
     */
    enterVariableDefinition?: (ctx: VariableDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.variableDefinition`.
     * @param ctx the parse tree
     */
    exitVariableDefinition?: (ctx: VariableDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.aliasedRelation`.
     * @param ctx the parse tree
     */
    enterAliasedRelation?: (ctx: AliasedRelationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.aliasedRelation`.
     * @param ctx the parse tree
     */
    exitAliasedRelation?: (ctx: AliasedRelationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.columnAliases`.
     * @param ctx the parse tree
     */
    enterColumnAliases?: (ctx: ColumnAliasesContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.columnAliases`.
     * @param ctx the parse tree
     */
    exitColumnAliases?: (ctx: ColumnAliasesContext) => void;
    /**
     * Enter a parse tree produced by the `tableName`
     * labeled alternative in `TrinoParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterTableName?: (ctx: TableNameContext) => void;
    /**
     * Exit a parse tree produced by the `tableName`
     * labeled alternative in `TrinoParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitTableName?: (ctx: TableNameContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryRelation`
     * labeled alternative in `TrinoParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterSubqueryRelation?: (ctx: SubqueryRelationContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryRelation`
     * labeled alternative in `TrinoParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitSubqueryRelation?: (ctx: SubqueryRelationContext) => void;
    /**
     * Enter a parse tree produced by the `unnest`
     * labeled alternative in `TrinoParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterUnnest?: (ctx: UnnestContext) => void;
    /**
     * Exit a parse tree produced by the `unnest`
     * labeled alternative in `TrinoParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitUnnest?: (ctx: UnnestContext) => void;
    /**
     * Enter a parse tree produced by the `lateral`
     * labeled alternative in `TrinoParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterLateral?: (ctx: LateralContext) => void;
    /**
     * Exit a parse tree produced by the `lateral`
     * labeled alternative in `TrinoParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitLateral?: (ctx: LateralContext) => void;
    /**
     * Enter a parse tree produced by the `tableFunctionInvocation`
     * labeled alternative in `TrinoParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterTableFunctionInvocation?: (ctx: TableFunctionInvocationContext) => void;
    /**
     * Exit a parse tree produced by the `tableFunctionInvocation`
     * labeled alternative in `TrinoParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitTableFunctionInvocation?: (ctx: TableFunctionInvocationContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesizedRelation`
     * labeled alternative in `TrinoParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesizedRelation`
     * labeled alternative in `TrinoParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.tableFunctionCall`.
     * @param ctx the parse tree
     */
    enterTableFunctionCall?: (ctx: TableFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.tableFunctionCall`.
     * @param ctx the parse tree
     */
    exitTableFunctionCall?: (ctx: TableFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.tableFunctionArgument`.
     * @param ctx the parse tree
     */
    enterTableFunctionArgument?: (ctx: TableFunctionArgumentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.tableFunctionArgument`.
     * @param ctx the parse tree
     */
    exitTableFunctionArgument?: (ctx: TableFunctionArgumentContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.tableArgument`.
     * @param ctx the parse tree
     */
    enterTableArgument?: (ctx: TableArgumentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.tableArgument`.
     * @param ctx the parse tree
     */
    exitTableArgument?: (ctx: TableArgumentContext) => void;
    /**
     * Enter a parse tree produced by the `tableArgumentTable`
     * labeled alternative in `TrinoParser.tableArgumentRelation`.
     * @param ctx the parse tree
     */
    enterTableArgumentTable?: (ctx: TableArgumentTableContext) => void;
    /**
     * Exit a parse tree produced by the `tableArgumentTable`
     * labeled alternative in `TrinoParser.tableArgumentRelation`.
     * @param ctx the parse tree
     */
    exitTableArgumentTable?: (ctx: TableArgumentTableContext) => void;
    /**
     * Enter a parse tree produced by the `tableArgumentQuery`
     * labeled alternative in `TrinoParser.tableArgumentRelation`.
     * @param ctx the parse tree
     */
    enterTableArgumentQuery?: (ctx: TableArgumentQueryContext) => void;
    /**
     * Exit a parse tree produced by the `tableArgumentQuery`
     * labeled alternative in `TrinoParser.tableArgumentRelation`.
     * @param ctx the parse tree
     */
    exitTableArgumentQuery?: (ctx: TableArgumentQueryContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.descriptorArgument`.
     * @param ctx the parse tree
     */
    enterDescriptorArgument?: (ctx: DescriptorArgumentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.descriptorArgument`.
     * @param ctx the parse tree
     */
    exitDescriptorArgument?: (ctx: DescriptorArgumentContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.descriptorField`.
     * @param ctx the parse tree
     */
    enterDescriptorField?: (ctx: DescriptorFieldContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.descriptorField`.
     * @param ctx the parse tree
     */
    exitDescriptorField?: (ctx: DescriptorFieldContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.copartitionTables`.
     * @param ctx the parse tree
     */
    enterCopartitionTables?: (ctx: CopartitionTablesContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.copartitionTables`.
     * @param ctx the parse tree
     */
    exitCopartitionTables?: (ctx: CopartitionTablesContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `logicalNot`
     * labeled alternative in `TrinoParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Exit a parse tree produced by the `logicalNot`
     * labeled alternative in `TrinoParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Enter a parse tree produced by the `predicated`
     * labeled alternative in `TrinoParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Exit a parse tree produced by the `predicated`
     * labeled alternative in `TrinoParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Enter a parse tree produced by the `or`
     * labeled alternative in `TrinoParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterOr?: (ctx: OrContext) => void;
    /**
     * Exit a parse tree produced by the `or`
     * labeled alternative in `TrinoParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitOr?: (ctx: OrContext) => void;
    /**
     * Enter a parse tree produced by the `and`
     * labeled alternative in `TrinoParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterAnd?: (ctx: AndContext) => void;
    /**
     * Exit a parse tree produced by the `and`
     * labeled alternative in `TrinoParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitAnd?: (ctx: AndContext) => void;
    /**
     * Enter a parse tree produced by the `comparison`
     * labeled alternative in `TrinoParser.predicate_`.
     * @param ctx the parse tree
     */
    enterComparison?: (ctx: ComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `comparison`
     * labeled alternative in `TrinoParser.predicate_`.
     * @param ctx the parse tree
     */
    exitComparison?: (ctx: ComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `quantifiedComparison`
     * labeled alternative in `TrinoParser.predicate_`.
     * @param ctx the parse tree
     */
    enterQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `quantifiedComparison`
     * labeled alternative in `TrinoParser.predicate_`.
     * @param ctx the parse tree
     */
    exitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `between`
     * labeled alternative in `TrinoParser.predicate_`.
     * @param ctx the parse tree
     */
    enterBetween?: (ctx: BetweenContext) => void;
    /**
     * Exit a parse tree produced by the `between`
     * labeled alternative in `TrinoParser.predicate_`.
     * @param ctx the parse tree
     */
    exitBetween?: (ctx: BetweenContext) => void;
    /**
     * Enter a parse tree produced by the `inList`
     * labeled alternative in `TrinoParser.predicate_`.
     * @param ctx the parse tree
     */
    enterInList?: (ctx: InListContext) => void;
    /**
     * Exit a parse tree produced by the `inList`
     * labeled alternative in `TrinoParser.predicate_`.
     * @param ctx the parse tree
     */
    exitInList?: (ctx: InListContext) => void;
    /**
     * Enter a parse tree produced by the `inSubquery`
     * labeled alternative in `TrinoParser.predicate_`.
     * @param ctx the parse tree
     */
    enterInSubquery?: (ctx: InSubqueryContext) => void;
    /**
     * Exit a parse tree produced by the `inSubquery`
     * labeled alternative in `TrinoParser.predicate_`.
     * @param ctx the parse tree
     */
    exitInSubquery?: (ctx: InSubqueryContext) => void;
    /**
     * Enter a parse tree produced by the `like`
     * labeled alternative in `TrinoParser.predicate_`.
     * @param ctx the parse tree
     */
    enterLike?: (ctx: LikeContext) => void;
    /**
     * Exit a parse tree produced by the `like`
     * labeled alternative in `TrinoParser.predicate_`.
     * @param ctx the parse tree
     */
    exitLike?: (ctx: LikeContext) => void;
    /**
     * Enter a parse tree produced by the `nullPredicate`
     * labeled alternative in `TrinoParser.predicate_`.
     * @param ctx the parse tree
     */
    enterNullPredicate?: (ctx: NullPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `nullPredicate`
     * labeled alternative in `TrinoParser.predicate_`.
     * @param ctx the parse tree
     */
    exitNullPredicate?: (ctx: NullPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `distinctFrom`
     * labeled alternative in `TrinoParser.predicate_`.
     * @param ctx the parse tree
     */
    enterDistinctFrom?: (ctx: DistinctFromContext) => void;
    /**
     * Exit a parse tree produced by the `distinctFrom`
     * labeled alternative in `TrinoParser.predicate_`.
     * @param ctx the parse tree
     */
    exitDistinctFrom?: (ctx: DistinctFromContext) => void;
    /**
     * Enter a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `TrinoParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `TrinoParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `concatenation`
     * labeled alternative in `TrinoParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterConcatenation?: (ctx: ConcatenationContext) => void;
    /**
     * Exit a parse tree produced by the `concatenation`
     * labeled alternative in `TrinoParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitConcatenation?: (ctx: ConcatenationContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `TrinoParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `TrinoParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `TrinoParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `TrinoParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Enter a parse tree produced by the `atTimeZone`
     * labeled alternative in `TrinoParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterAtTimeZone?: (ctx: AtTimeZoneContext) => void;
    /**
     * Exit a parse tree produced by the `atTimeZone`
     * labeled alternative in `TrinoParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitAtTimeZone?: (ctx: AtTimeZoneContext) => void;
    /**
     * Enter a parse tree produced by the `dereference`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDereference?: (ctx: DereferenceContext) => void;
    /**
     * Exit a parse tree produced by the `dereference`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDereference?: (ctx: DereferenceContext) => void;
    /**
     * Enter a parse tree produced by the `typeConstructor`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterTypeConstructor?: (ctx: TypeConstructorContext) => void;
    /**
     * Exit a parse tree produced by the `typeConstructor`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitTypeConstructor?: (ctx: TypeConstructorContext) => void;
    /**
     * Enter a parse tree produced by the `jsonValue`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterJsonValue?: (ctx: JsonValueContext) => void;
    /**
     * Exit a parse tree produced by the `jsonValue`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitJsonValue?: (ctx: JsonValueContext) => void;
    /**
     * Enter a parse tree produced by the `specialDateTimeFunction`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `specialDateTimeFunction`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `substring`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubstring?: (ctx: SubstringContext) => void;
    /**
     * Exit a parse tree produced by the `substring`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubstring?: (ctx: SubstringContext) => void;
    /**
     * Enter a parse tree produced by the `cast`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCast?: (ctx: CastContext) => void;
    /**
     * Exit a parse tree produced by the `cast`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCast?: (ctx: CastContext) => void;
    /**
     * Enter a parse tree produced by the `lambda`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterLambda?: (ctx: LambdaContext) => void;
    /**
     * Exit a parse tree produced by the `lambda`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitLambda?: (ctx: LambdaContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `trim`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterTrim?: (ctx: TrimContext) => void;
    /**
     * Exit a parse tree produced by the `trim`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitTrim?: (ctx: TrimContext) => void;
    /**
     * Enter a parse tree produced by the `parameter`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterParameter?: (ctx: ParameterContext) => void;
    /**
     * Exit a parse tree produced by the `parameter`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitParameter?: (ctx: ParameterContext) => void;
    /**
     * Enter a parse tree produced by the `normalize`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterNormalize?: (ctx: NormalizeContext) => void;
    /**
     * Exit a parse tree produced by the `normalize`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitNormalize?: (ctx: NormalizeContext) => void;
    /**
     * Enter a parse tree produced by the `jsonObject`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterJsonObject?: (ctx: JsonObjectContext) => void;
    /**
     * Exit a parse tree produced by the `jsonObject`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitJsonObject?: (ctx: JsonObjectContext) => void;
    /**
     * Enter a parse tree produced by the `intervalLiteral`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `intervalLiteral`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `numericLiteral`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `numericLiteral`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitNumericLiteral?: (ctx: NumericLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `booleanLiteral`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `booleanLiteral`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `jsonArray`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterJsonArray?: (ctx: JsonArrayContext) => void;
    /**
     * Exit a parse tree produced by the `jsonArray`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitJsonArray?: (ctx: JsonArrayContext) => void;
    /**
     * Enter a parse tree produced by the `simpleCase`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSimpleCase?: (ctx: SimpleCaseContext) => void;
    /**
     * Exit a parse tree produced by the `simpleCase`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSimpleCase?: (ctx: SimpleCaseContext) => void;
    /**
     * Enter a parse tree produced by the `columnReference`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterColumnReference?: (ctx: ColumnReferenceContext) => void;
    /**
     * Exit a parse tree produced by the `columnReference`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitColumnReference?: (ctx: ColumnReferenceContext) => void;
    /**
     * Enter a parse tree produced by the `nullLiteral`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `nullLiteral`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `rowConstructor`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterRowConstructor?: (ctx: RowConstructorContext) => void;
    /**
     * Exit a parse tree produced by the `rowConstructor`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitRowConstructor?: (ctx: RowConstructorContext) => void;
    /**
     * Enter a parse tree produced by the `subscript`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubscript?: (ctx: SubscriptContext) => void;
    /**
     * Exit a parse tree produced by the `subscript`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubscript?: (ctx: SubscriptContext) => void;
    /**
     * Enter a parse tree produced by the `jsonExists`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterJsonExists?: (ctx: JsonExistsContext) => void;
    /**
     * Exit a parse tree produced by the `jsonExists`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitJsonExists?: (ctx: JsonExistsContext) => void;
    /**
     * Enter a parse tree produced by the `currentPath`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentPath?: (ctx: CurrentPathContext) => void;
    /**
     * Exit a parse tree produced by the `currentPath`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentPath?: (ctx: CurrentPathContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryExpression`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryExpression`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `binaryLiteral`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterBinaryLiteral?: (ctx: BinaryLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `binaryLiteral`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitBinaryLiteral?: (ctx: BinaryLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `currentUser`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentUser?: (ctx: CurrentUserContext) => void;
    /**
     * Exit a parse tree produced by the `currentUser`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentUser?: (ctx: CurrentUserContext) => void;
    /**
     * Enter a parse tree produced by the `jsonQuery`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterJsonQuery?: (ctx: JsonQueryContext) => void;
    /**
     * Exit a parse tree produced by the `jsonQuery`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitJsonQuery?: (ctx: JsonQueryContext) => void;
    /**
     * Enter a parse tree produced by the `measure`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterMeasure?: (ctx: MeasureContext) => void;
    /**
     * Exit a parse tree produced by the `measure`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitMeasure?: (ctx: MeasureContext) => void;
    /**
     * Enter a parse tree produced by the `extract`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterExtract?: (ctx: ExtractContext) => void;
    /**
     * Exit a parse tree produced by the `extract`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitExtract?: (ctx: ExtractContext) => void;
    /**
     * Enter a parse tree produced by the `stringLiteral`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `stringLiteral`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `arrayConstructor`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterArrayConstructor?: (ctx: ArrayConstructorContext) => void;
    /**
     * Exit a parse tree produced by the `arrayConstructor`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitArrayConstructor?: (ctx: ArrayConstructorContext) => void;
    /**
     * Enter a parse tree produced by the `functionCall`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `functionCall`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `currentSchema`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentSchema?: (ctx: CurrentSchemaContext) => void;
    /**
     * Exit a parse tree produced by the `currentSchema`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentSchema?: (ctx: CurrentSchemaContext) => void;
    /**
     * Enter a parse tree produced by the `exists`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterExists?: (ctx: ExistsContext) => void;
    /**
     * Exit a parse tree produced by the `exists`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitExists?: (ctx: ExistsContext) => void;
    /**
     * Enter a parse tree produced by the `position`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterPosition?: (ctx: PositionContext) => void;
    /**
     * Exit a parse tree produced by the `position`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitPosition?: (ctx: PositionContext) => void;
    /**
     * Enter a parse tree produced by the `listagg`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterListagg?: (ctx: ListaggContext) => void;
    /**
     * Exit a parse tree produced by the `listagg`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitListagg?: (ctx: ListaggContext) => void;
    /**
     * Enter a parse tree produced by the `searchedCase`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSearchedCase?: (ctx: SearchedCaseContext) => void;
    /**
     * Exit a parse tree produced by the `searchedCase`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSearchedCase?: (ctx: SearchedCaseContext) => void;
    /**
     * Enter a parse tree produced by the `currentCatalog`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentCatalog?: (ctx: CurrentCatalogContext) => void;
    /**
     * Exit a parse tree produced by the `currentCatalog`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentCatalog?: (ctx: CurrentCatalogContext) => void;
    /**
     * Enter a parse tree produced by the `groupingOperation`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterGroupingOperation?: (ctx: GroupingOperationContext) => void;
    /**
     * Exit a parse tree produced by the `groupingOperation`
     * labeled alternative in `TrinoParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitGroupingOperation?: (ctx: GroupingOperationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.jsonPathInvocation`.
     * @param ctx the parse tree
     */
    enterJsonPathInvocation?: (ctx: JsonPathInvocationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.jsonPathInvocation`.
     * @param ctx the parse tree
     */
    exitJsonPathInvocation?: (ctx: JsonPathInvocationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.jsonValueExpression`.
     * @param ctx the parse tree
     */
    enterJsonValueExpression?: (ctx: JsonValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.jsonValueExpression`.
     * @param ctx the parse tree
     */
    exitJsonValueExpression?: (ctx: JsonValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.jsonRepresentation`.
     * @param ctx the parse tree
     */
    enterJsonRepresentation?: (ctx: JsonRepresentationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.jsonRepresentation`.
     * @param ctx the parse tree
     */
    exitJsonRepresentation?: (ctx: JsonRepresentationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.jsonArgument`.
     * @param ctx the parse tree
     */
    enterJsonArgument?: (ctx: JsonArgumentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.jsonArgument`.
     * @param ctx the parse tree
     */
    exitJsonArgument?: (ctx: JsonArgumentContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.jsonExistsErrorBehavior`.
     * @param ctx the parse tree
     */
    enterJsonExistsErrorBehavior?: (ctx: JsonExistsErrorBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.jsonExistsErrorBehavior`.
     * @param ctx the parse tree
     */
    exitJsonExistsErrorBehavior?: (ctx: JsonExistsErrorBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.jsonValueBehavior`.
     * @param ctx the parse tree
     */
    enterJsonValueBehavior?: (ctx: JsonValueBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.jsonValueBehavior`.
     * @param ctx the parse tree
     */
    exitJsonValueBehavior?: (ctx: JsonValueBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.jsonQueryWrapperBehavior`.
     * @param ctx the parse tree
     */
    enterJsonQueryWrapperBehavior?: (ctx: JsonQueryWrapperBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.jsonQueryWrapperBehavior`.
     * @param ctx the parse tree
     */
    exitJsonQueryWrapperBehavior?: (ctx: JsonQueryWrapperBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.jsonQueryBehavior`.
     * @param ctx the parse tree
     */
    enterJsonQueryBehavior?: (ctx: JsonQueryBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.jsonQueryBehavior`.
     * @param ctx the parse tree
     */
    exitJsonQueryBehavior?: (ctx: JsonQueryBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.jsonObjectMember`.
     * @param ctx the parse tree
     */
    enterJsonObjectMember?: (ctx: JsonObjectMemberContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.jsonObjectMember`.
     * @param ctx the parse tree
     */
    exitJsonObjectMember?: (ctx: JsonObjectMemberContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.processingMode`.
     * @param ctx the parse tree
     */
    enterProcessingMode?: (ctx: ProcessingModeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.processingMode`.
     * @param ctx the parse tree
     */
    exitProcessingMode?: (ctx: ProcessingModeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.nullTreatment`.
     * @param ctx the parse tree
     */
    enterNullTreatment?: (ctx: NullTreatmentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.nullTreatment`.
     * @param ctx the parse tree
     */
    exitNullTreatment?: (ctx: NullTreatmentContext) => void;
    /**
     * Enter a parse tree produced by the `basicStringLiteral`
     * labeled alternative in `TrinoParser.string_`.
     * @param ctx the parse tree
     */
    enterBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `basicStringLiteral`
     * labeled alternative in `TrinoParser.string_`.
     * @param ctx the parse tree
     */
    exitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `unicodeStringLiteral`
     * labeled alternative in `TrinoParser.string_`.
     * @param ctx the parse tree
     */
    enterUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `unicodeStringLiteral`
     * labeled alternative in `TrinoParser.string_`.
     * @param ctx the parse tree
     */
    exitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `timeZoneInterval`
     * labeled alternative in `TrinoParser.timeZoneSpecifier`.
     * @param ctx the parse tree
     */
    enterTimeZoneInterval?: (ctx: TimeZoneIntervalContext) => void;
    /**
     * Exit a parse tree produced by the `timeZoneInterval`
     * labeled alternative in `TrinoParser.timeZoneSpecifier`.
     * @param ctx the parse tree
     */
    exitTimeZoneInterval?: (ctx: TimeZoneIntervalContext) => void;
    /**
     * Enter a parse tree produced by the `timeZoneString`
     * labeled alternative in `TrinoParser.timeZoneSpecifier`.
     * @param ctx the parse tree
     */
    enterTimeZoneString?: (ctx: TimeZoneStringContext) => void;
    /**
     * Exit a parse tree produced by the `timeZoneString`
     * labeled alternative in `TrinoParser.timeZoneSpecifier`.
     * @param ctx the parse tree
     */
    exitTimeZoneString?: (ctx: TimeZoneStringContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.comparisonQuantifier`.
     * @param ctx the parse tree
     */
    enterComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.comparisonQuantifier`.
     * @param ctx the parse tree
     */
    exitComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.booleanValue`.
     * @param ctx the parse tree
     */
    enterBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.booleanValue`.
     * @param ctx the parse tree
     */
    exitBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.interval`.
     * @param ctx the parse tree
     */
    enterInterval?: (ctx: IntervalContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.interval`.
     * @param ctx the parse tree
     */
    exitInterval?: (ctx: IntervalContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.intervalField`.
     * @param ctx the parse tree
     */
    enterIntervalField?: (ctx: IntervalFieldContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.intervalField`.
     * @param ctx the parse tree
     */
    exitIntervalField?: (ctx: IntervalFieldContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.normalForm`.
     * @param ctx the parse tree
     */
    enterNormalForm?: (ctx: NormalFormContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.normalForm`.
     * @param ctx the parse tree
     */
    exitNormalForm?: (ctx: NormalFormContext) => void;
    /**
     * Enter a parse tree produced by the `rowType`
     * labeled alternative in `TrinoParser.type`.
     * @param ctx the parse tree
     */
    enterRowType?: (ctx: RowTypeContext) => void;
    /**
     * Exit a parse tree produced by the `rowType`
     * labeled alternative in `TrinoParser.type`.
     * @param ctx the parse tree
     */
    exitRowType?: (ctx: RowTypeContext) => void;
    /**
     * Enter a parse tree produced by the `intervalType`
     * labeled alternative in `TrinoParser.type`.
     * @param ctx the parse tree
     */
    enterIntervalType?: (ctx: IntervalTypeContext) => void;
    /**
     * Exit a parse tree produced by the `intervalType`
     * labeled alternative in `TrinoParser.type`.
     * @param ctx the parse tree
     */
    exitIntervalType?: (ctx: IntervalTypeContext) => void;
    /**
     * Enter a parse tree produced by the `arrayType`
     * labeled alternative in `TrinoParser.type`.
     * @param ctx the parse tree
     */
    enterArrayType?: (ctx: ArrayTypeContext) => void;
    /**
     * Exit a parse tree produced by the `arrayType`
     * labeled alternative in `TrinoParser.type`.
     * @param ctx the parse tree
     */
    exitArrayType?: (ctx: ArrayTypeContext) => void;
    /**
     * Enter a parse tree produced by the `doublePrecisionType`
     * labeled alternative in `TrinoParser.type`.
     * @param ctx the parse tree
     */
    enterDoublePrecisionType?: (ctx: DoublePrecisionTypeContext) => void;
    /**
     * Exit a parse tree produced by the `doublePrecisionType`
     * labeled alternative in `TrinoParser.type`.
     * @param ctx the parse tree
     */
    exitDoublePrecisionType?: (ctx: DoublePrecisionTypeContext) => void;
    /**
     * Enter a parse tree produced by the `legacyArrayType`
     * labeled alternative in `TrinoParser.type`.
     * @param ctx the parse tree
     */
    enterLegacyArrayType?: (ctx: LegacyArrayTypeContext) => void;
    /**
     * Exit a parse tree produced by the `legacyArrayType`
     * labeled alternative in `TrinoParser.type`.
     * @param ctx the parse tree
     */
    exitLegacyArrayType?: (ctx: LegacyArrayTypeContext) => void;
    /**
     * Enter a parse tree produced by the `genericType`
     * labeled alternative in `TrinoParser.type`.
     * @param ctx the parse tree
     */
    enterGenericType?: (ctx: GenericTypeContext) => void;
    /**
     * Exit a parse tree produced by the `genericType`
     * labeled alternative in `TrinoParser.type`.
     * @param ctx the parse tree
     */
    exitGenericType?: (ctx: GenericTypeContext) => void;
    /**
     * Enter a parse tree produced by the `dateTimeType`
     * labeled alternative in `TrinoParser.type`.
     * @param ctx the parse tree
     */
    enterDateTimeType?: (ctx: DateTimeTypeContext) => void;
    /**
     * Exit a parse tree produced by the `dateTimeType`
     * labeled alternative in `TrinoParser.type`.
     * @param ctx the parse tree
     */
    exitDateTimeType?: (ctx: DateTimeTypeContext) => void;
    /**
     * Enter a parse tree produced by the `legacyMapType`
     * labeled alternative in `TrinoParser.type`.
     * @param ctx the parse tree
     */
    enterLegacyMapType?: (ctx: LegacyMapTypeContext) => void;
    /**
     * Exit a parse tree produced by the `legacyMapType`
     * labeled alternative in `TrinoParser.type`.
     * @param ctx the parse tree
     */
    exitLegacyMapType?: (ctx: LegacyMapTypeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.rowField`.
     * @param ctx the parse tree
     */
    enterRowField?: (ctx: RowFieldContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.rowField`.
     * @param ctx the parse tree
     */
    exitRowField?: (ctx: RowFieldContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.typeParameter`.
     * @param ctx the parse tree
     */
    enterTypeParameter?: (ctx: TypeParameterContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.typeParameter`.
     * @param ctx the parse tree
     */
    exitTypeParameter?: (ctx: TypeParameterContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.whenClause`.
     * @param ctx the parse tree
     */
    enterWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.whenClause`.
     * @param ctx the parse tree
     */
    exitWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.filter`.
     * @param ctx the parse tree
     */
    enterFilter?: (ctx: FilterContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.filter`.
     * @param ctx the parse tree
     */
    exitFilter?: (ctx: FilterContext) => void;
    /**
     * Enter a parse tree produced by the `mergeUpdate`
     * labeled alternative in `TrinoParser.mergeCase`.
     * @param ctx the parse tree
     */
    enterMergeUpdate?: (ctx: MergeUpdateContext) => void;
    /**
     * Exit a parse tree produced by the `mergeUpdate`
     * labeled alternative in `TrinoParser.mergeCase`.
     * @param ctx the parse tree
     */
    exitMergeUpdate?: (ctx: MergeUpdateContext) => void;
    /**
     * Enter a parse tree produced by the `mergeDelete`
     * labeled alternative in `TrinoParser.mergeCase`.
     * @param ctx the parse tree
     */
    enterMergeDelete?: (ctx: MergeDeleteContext) => void;
    /**
     * Exit a parse tree produced by the `mergeDelete`
     * labeled alternative in `TrinoParser.mergeCase`.
     * @param ctx the parse tree
     */
    exitMergeDelete?: (ctx: MergeDeleteContext) => void;
    /**
     * Enter a parse tree produced by the `mergeInsert`
     * labeled alternative in `TrinoParser.mergeCase`.
     * @param ctx the parse tree
     */
    enterMergeInsert?: (ctx: MergeInsertContext) => void;
    /**
     * Exit a parse tree produced by the `mergeInsert`
     * labeled alternative in `TrinoParser.mergeCase`.
     * @param ctx the parse tree
     */
    exitMergeInsert?: (ctx: MergeInsertContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.over`.
     * @param ctx the parse tree
     */
    enterOver?: (ctx: OverContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.over`.
     * @param ctx the parse tree
     */
    exitOver?: (ctx: OverContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.windowFrame`.
     * @param ctx the parse tree
     */
    enterWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.windowFrame`.
     * @param ctx the parse tree
     */
    exitWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.frameExtent`.
     * @param ctx the parse tree
     */
    enterFrameExtent?: (ctx: FrameExtentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.frameExtent`.
     * @param ctx the parse tree
     */
    exitFrameExtent?: (ctx: FrameExtentContext) => void;
    /**
     * Enter a parse tree produced by the `unboundedFrame`
     * labeled alternative in `TrinoParser.frameBound`.
     * @param ctx the parse tree
     */
    enterUnboundedFrame?: (ctx: UnboundedFrameContext) => void;
    /**
     * Exit a parse tree produced by the `unboundedFrame`
     * labeled alternative in `TrinoParser.frameBound`.
     * @param ctx the parse tree
     */
    exitUnboundedFrame?: (ctx: UnboundedFrameContext) => void;
    /**
     * Enter a parse tree produced by the `currentRowBound`
     * labeled alternative in `TrinoParser.frameBound`.
     * @param ctx the parse tree
     */
    enterCurrentRowBound?: (ctx: CurrentRowBoundContext) => void;
    /**
     * Exit a parse tree produced by the `currentRowBound`
     * labeled alternative in `TrinoParser.frameBound`.
     * @param ctx the parse tree
     */
    exitCurrentRowBound?: (ctx: CurrentRowBoundContext) => void;
    /**
     * Enter a parse tree produced by the `boundedFrame`
     * labeled alternative in `TrinoParser.frameBound`.
     * @param ctx the parse tree
     */
    enterBoundedFrame?: (ctx: BoundedFrameContext) => void;
    /**
     * Exit a parse tree produced by the `boundedFrame`
     * labeled alternative in `TrinoParser.frameBound`.
     * @param ctx the parse tree
     */
    exitBoundedFrame?: (ctx: BoundedFrameContext) => void;
    /**
     * Enter a parse tree produced by the `quantifiedPrimary`
     * labeled alternative in `TrinoParser.rowPattern`.
     * @param ctx the parse tree
     */
    enterQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => void;
    /**
     * Exit a parse tree produced by the `quantifiedPrimary`
     * labeled alternative in `TrinoParser.rowPattern`.
     * @param ctx the parse tree
     */
    exitQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => void;
    /**
     * Enter a parse tree produced by the `patternConcatenation`
     * labeled alternative in `TrinoParser.rowPattern`.
     * @param ctx the parse tree
     */
    enterPatternConcatenation?: (ctx: PatternConcatenationContext) => void;
    /**
     * Exit a parse tree produced by the `patternConcatenation`
     * labeled alternative in `TrinoParser.rowPattern`.
     * @param ctx the parse tree
     */
    exitPatternConcatenation?: (ctx: PatternConcatenationContext) => void;
    /**
     * Enter a parse tree produced by the `patternAlternation`
     * labeled alternative in `TrinoParser.rowPattern`.
     * @param ctx the parse tree
     */
    enterPatternAlternation?: (ctx: PatternAlternationContext) => void;
    /**
     * Exit a parse tree produced by the `patternAlternation`
     * labeled alternative in `TrinoParser.rowPattern`.
     * @param ctx the parse tree
     */
    exitPatternAlternation?: (ctx: PatternAlternationContext) => void;
    /**
     * Enter a parse tree produced by the `patternVariable`
     * labeled alternative in `TrinoParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterPatternVariable?: (ctx: PatternVariableContext) => void;
    /**
     * Exit a parse tree produced by the `patternVariable`
     * labeled alternative in `TrinoParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitPatternVariable?: (ctx: PatternVariableContext) => void;
    /**
     * Enter a parse tree produced by the `emptyPattern`
     * labeled alternative in `TrinoParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterEmptyPattern?: (ctx: EmptyPatternContext) => void;
    /**
     * Exit a parse tree produced by the `emptyPattern`
     * labeled alternative in `TrinoParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitEmptyPattern?: (ctx: EmptyPatternContext) => void;
    /**
     * Enter a parse tree produced by the `patternPermutation`
     * labeled alternative in `TrinoParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterPatternPermutation?: (ctx: PatternPermutationContext) => void;
    /**
     * Exit a parse tree produced by the `patternPermutation`
     * labeled alternative in `TrinoParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitPatternPermutation?: (ctx: PatternPermutationContext) => void;
    /**
     * Enter a parse tree produced by the `groupedPattern`
     * labeled alternative in `TrinoParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterGroupedPattern?: (ctx: GroupedPatternContext) => void;
    /**
     * Exit a parse tree produced by the `groupedPattern`
     * labeled alternative in `TrinoParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitGroupedPattern?: (ctx: GroupedPatternContext) => void;
    /**
     * Enter a parse tree produced by the `partitionStartAnchor`
     * labeled alternative in `TrinoParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => void;
    /**
     * Exit a parse tree produced by the `partitionStartAnchor`
     * labeled alternative in `TrinoParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => void;
    /**
     * Enter a parse tree produced by the `partitionEndAnchor`
     * labeled alternative in `TrinoParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => void;
    /**
     * Exit a parse tree produced by the `partitionEndAnchor`
     * labeled alternative in `TrinoParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => void;
    /**
     * Enter a parse tree produced by the `excludedPattern`
     * labeled alternative in `TrinoParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterExcludedPattern?: (ctx: ExcludedPatternContext) => void;
    /**
     * Exit a parse tree produced by the `excludedPattern`
     * labeled alternative in `TrinoParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitExcludedPattern?: (ctx: ExcludedPatternContext) => void;
    /**
     * Enter a parse tree produced by the `zeroOrMoreQuantifier`
     * labeled alternative in `TrinoParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    enterZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => void;
    /**
     * Exit a parse tree produced by the `zeroOrMoreQuantifier`
     * labeled alternative in `TrinoParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    exitZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `oneOrMoreQuantifier`
     * labeled alternative in `TrinoParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    enterOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => void;
    /**
     * Exit a parse tree produced by the `oneOrMoreQuantifier`
     * labeled alternative in `TrinoParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    exitOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `zeroOrOneQuantifier`
     * labeled alternative in `TrinoParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    enterZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => void;
    /**
     * Exit a parse tree produced by the `zeroOrOneQuantifier`
     * labeled alternative in `TrinoParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    exitZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `rangeQuantifier`
     * labeled alternative in `TrinoParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    enterRangeQuantifier?: (ctx: RangeQuantifierContext) => void;
    /**
     * Exit a parse tree produced by the `rangeQuantifier`
     * labeled alternative in `TrinoParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    exitRangeQuantifier?: (ctx: RangeQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.updateAssignment`.
     * @param ctx the parse tree
     */
    enterUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.updateAssignment`.
     * @param ctx the parse tree
     */
    exitUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
    /**
     * Enter a parse tree produced by the `explainFormat`
     * labeled alternative in `TrinoParser.explainOption`.
     * @param ctx the parse tree
     */
    enterExplainFormat?: (ctx: ExplainFormatContext) => void;
    /**
     * Exit a parse tree produced by the `explainFormat`
     * labeled alternative in `TrinoParser.explainOption`.
     * @param ctx the parse tree
     */
    exitExplainFormat?: (ctx: ExplainFormatContext) => void;
    /**
     * Enter a parse tree produced by the `explainType`
     * labeled alternative in `TrinoParser.explainOption`.
     * @param ctx the parse tree
     */
    enterExplainType?: (ctx: ExplainTypeContext) => void;
    /**
     * Exit a parse tree produced by the `explainType`
     * labeled alternative in `TrinoParser.explainOption`.
     * @param ctx the parse tree
     */
    exitExplainType?: (ctx: ExplainTypeContext) => void;
    /**
     * Enter a parse tree produced by the `isolationLevel`
     * labeled alternative in `TrinoParser.transactionMode`.
     * @param ctx the parse tree
     */
    enterIsolationLevel?: (ctx: IsolationLevelContext) => void;
    /**
     * Exit a parse tree produced by the `isolationLevel`
     * labeled alternative in `TrinoParser.transactionMode`.
     * @param ctx the parse tree
     */
    exitIsolationLevel?: (ctx: IsolationLevelContext) => void;
    /**
     * Enter a parse tree produced by the `transactionAccessMode`
     * labeled alternative in `TrinoParser.transactionMode`.
     * @param ctx the parse tree
     */
    enterTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
    /**
     * Exit a parse tree produced by the `transactionAccessMode`
     * labeled alternative in `TrinoParser.transactionMode`.
     * @param ctx the parse tree
     */
    exitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
    /**
     * Enter a parse tree produced by the `readUncommitted`
     * labeled alternative in `TrinoParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    enterReadUncommitted?: (ctx: ReadUncommittedContext) => void;
    /**
     * Exit a parse tree produced by the `readUncommitted`
     * labeled alternative in `TrinoParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    exitReadUncommitted?: (ctx: ReadUncommittedContext) => void;
    /**
     * Enter a parse tree produced by the `readCommitted`
     * labeled alternative in `TrinoParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    enterReadCommitted?: (ctx: ReadCommittedContext) => void;
    /**
     * Exit a parse tree produced by the `readCommitted`
     * labeled alternative in `TrinoParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    exitReadCommitted?: (ctx: ReadCommittedContext) => void;
    /**
     * Enter a parse tree produced by the `repeatableRead`
     * labeled alternative in `TrinoParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    enterRepeatableRead?: (ctx: RepeatableReadContext) => void;
    /**
     * Exit a parse tree produced by the `repeatableRead`
     * labeled alternative in `TrinoParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    exitRepeatableRead?: (ctx: RepeatableReadContext) => void;
    /**
     * Enter a parse tree produced by the `serializable`
     * labeled alternative in `TrinoParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    enterSerializable?: (ctx: SerializableContext) => void;
    /**
     * Exit a parse tree produced by the `serializable`
     * labeled alternative in `TrinoParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    exitSerializable?: (ctx: SerializableContext) => void;
    /**
     * Enter a parse tree produced by the `positionalArgument`
     * labeled alternative in `TrinoParser.callArgument`.
     * @param ctx the parse tree
     */
    enterPositionalArgument?: (ctx: PositionalArgumentContext) => void;
    /**
     * Exit a parse tree produced by the `positionalArgument`
     * labeled alternative in `TrinoParser.callArgument`.
     * @param ctx the parse tree
     */
    exitPositionalArgument?: (ctx: PositionalArgumentContext) => void;
    /**
     * Enter a parse tree produced by the `namedArgument`
     * labeled alternative in `TrinoParser.callArgument`.
     * @param ctx the parse tree
     */
    enterNamedArgument?: (ctx: NamedArgumentContext) => void;
    /**
     * Exit a parse tree produced by the `namedArgument`
     * labeled alternative in `TrinoParser.callArgument`.
     * @param ctx the parse tree
     */
    exitNamedArgument?: (ctx: NamedArgumentContext) => void;
    /**
     * Enter a parse tree produced by the `qualifiedArgument`
     * labeled alternative in `TrinoParser.pathElement`.
     * @param ctx the parse tree
     */
    enterQualifiedArgument?: (ctx: QualifiedArgumentContext) => void;
    /**
     * Exit a parse tree produced by the `qualifiedArgument`
     * labeled alternative in `TrinoParser.pathElement`.
     * @param ctx the parse tree
     */
    exitQualifiedArgument?: (ctx: QualifiedArgumentContext) => void;
    /**
     * Enter a parse tree produced by the `unqualifiedArgument`
     * labeled alternative in `TrinoParser.pathElement`.
     * @param ctx the parse tree
     */
    enterUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => void;
    /**
     * Exit a parse tree produced by the `unqualifiedArgument`
     * labeled alternative in `TrinoParser.pathElement`.
     * @param ctx the parse tree
     */
    exitUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.pathSpecification`.
     * @param ctx the parse tree
     */
    enterPathSpecification?: (ctx: PathSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.pathSpecification`.
     * @param ctx the parse tree
     */
    exitPathSpecification?: (ctx: PathSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.functionSpecification`.
     * @param ctx the parse tree
     */
    enterFunctionSpecification?: (ctx: FunctionSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.functionSpecification`.
     * @param ctx the parse tree
     */
    exitFunctionSpecification?: (ctx: FunctionSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.functionDeclaration`.
     * @param ctx the parse tree
     */
    enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.functionDeclaration`.
     * @param ctx the parse tree
     */
    exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.parameterDeclaration`.
     * @param ctx the parse tree
     */
    enterParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.parameterDeclaration`.
     * @param ctx the parse tree
     */
    exitParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.returnsClause`.
     * @param ctx the parse tree
     */
    enterReturnsClause?: (ctx: ReturnsClauseContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.returnsClause`.
     * @param ctx the parse tree
     */
    exitReturnsClause?: (ctx: ReturnsClauseContext) => void;
    /**
     * Enter a parse tree produced by the `languageCharacteristic`
     * labeled alternative in `TrinoParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    enterLanguageCharacteristic?: (ctx: LanguageCharacteristicContext) => void;
    /**
     * Exit a parse tree produced by the `languageCharacteristic`
     * labeled alternative in `TrinoParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    exitLanguageCharacteristic?: (ctx: LanguageCharacteristicContext) => void;
    /**
     * Enter a parse tree produced by the `deterministicCharacteristic`
     * labeled alternative in `TrinoParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    enterDeterministicCharacteristic?: (ctx: DeterministicCharacteristicContext) => void;
    /**
     * Exit a parse tree produced by the `deterministicCharacteristic`
     * labeled alternative in `TrinoParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    exitDeterministicCharacteristic?: (ctx: DeterministicCharacteristicContext) => void;
    /**
     * Enter a parse tree produced by the `returnsNullOnNullInputCharacteristic`
     * labeled alternative in `TrinoParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    enterReturnsNullOnNullInputCharacteristic?: (ctx: ReturnsNullOnNullInputCharacteristicContext) => void;
    /**
     * Exit a parse tree produced by the `returnsNullOnNullInputCharacteristic`
     * labeled alternative in `TrinoParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    exitReturnsNullOnNullInputCharacteristic?: (ctx: ReturnsNullOnNullInputCharacteristicContext) => void;
    /**
     * Enter a parse tree produced by the `calledOnNullInputCharacteristic`
     * labeled alternative in `TrinoParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    enterCalledOnNullInputCharacteristic?: (ctx: CalledOnNullInputCharacteristicContext) => void;
    /**
     * Exit a parse tree produced by the `calledOnNullInputCharacteristic`
     * labeled alternative in `TrinoParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    exitCalledOnNullInputCharacteristic?: (ctx: CalledOnNullInputCharacteristicContext) => void;
    /**
     * Enter a parse tree produced by the `securityCharacteristic`
     * labeled alternative in `TrinoParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    enterSecurityCharacteristic?: (ctx: SecurityCharacteristicContext) => void;
    /**
     * Exit a parse tree produced by the `securityCharacteristic`
     * labeled alternative in `TrinoParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    exitSecurityCharacteristic?: (ctx: SecurityCharacteristicContext) => void;
    /**
     * Enter a parse tree produced by the `commentCharacteristic`
     * labeled alternative in `TrinoParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    enterCommentCharacteristic?: (ctx: CommentCharacteristicContext) => void;
    /**
     * Exit a parse tree produced by the `commentCharacteristic`
     * labeled alternative in `TrinoParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    exitCommentCharacteristic?: (ctx: CommentCharacteristicContext) => void;
    /**
     * Enter a parse tree produced by the `returnStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Exit a parse tree produced by the `returnStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Enter a parse tree produced by the `assignmentStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
    /**
     * Exit a parse tree produced by the `assignmentStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
    /**
     * Enter a parse tree produced by the `simpleCaseStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterSimpleCaseStatement?: (ctx: SimpleCaseStatementContext) => void;
    /**
     * Exit a parse tree produced by the `simpleCaseStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitSimpleCaseStatement?: (ctx: SimpleCaseStatementContext) => void;
    /**
     * Enter a parse tree produced by the `searchedCaseStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterSearchedCaseStatement?: (ctx: SearchedCaseStatementContext) => void;
    /**
     * Exit a parse tree produced by the `searchedCaseStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitSearchedCaseStatement?: (ctx: SearchedCaseStatementContext) => void;
    /**
     * Enter a parse tree produced by the `ifStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Exit a parse tree produced by the `ifStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Enter a parse tree produced by the `iterateStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterIterateStatement?: (ctx: IterateStatementContext) => void;
    /**
     * Exit a parse tree produced by the `iterateStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitIterateStatement?: (ctx: IterateStatementContext) => void;
    /**
     * Enter a parse tree produced by the `leaveStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterLeaveStatement?: (ctx: LeaveStatementContext) => void;
    /**
     * Exit a parse tree produced by the `leaveStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitLeaveStatement?: (ctx: LeaveStatementContext) => void;
    /**
     * Enter a parse tree produced by the `compoundStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterCompoundStatement?: (ctx: CompoundStatementContext) => void;
    /**
     * Exit a parse tree produced by the `compoundStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitCompoundStatement?: (ctx: CompoundStatementContext) => void;
    /**
     * Enter a parse tree produced by the `loopStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterLoopStatement?: (ctx: LoopStatementContext) => void;
    /**
     * Exit a parse tree produced by the `loopStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitLoopStatement?: (ctx: LoopStatementContext) => void;
    /**
     * Enter a parse tree produced by the `whileStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Exit a parse tree produced by the `whileStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Enter a parse tree produced by the `repeatStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterRepeatStatement?: (ctx: RepeatStatementContext) => void;
    /**
     * Exit a parse tree produced by the `repeatStatement`
     * labeled alternative in `TrinoParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitRepeatStatement?: (ctx: RepeatStatementContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.caseStatementWhenClause`.
     * @param ctx the parse tree
     */
    enterCaseStatementWhenClause?: (ctx: CaseStatementWhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.caseStatementWhenClause`.
     * @param ctx the parse tree
     */
    exitCaseStatementWhenClause?: (ctx: CaseStatementWhenClauseContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.elseIfClause`.
     * @param ctx the parse tree
     */
    enterElseIfClause?: (ctx: ElseIfClauseContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.elseIfClause`.
     * @param ctx the parse tree
     */
    exitElseIfClause?: (ctx: ElseIfClauseContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.elseClause`.
     * @param ctx the parse tree
     */
    enterElseClause?: (ctx: ElseClauseContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.elseClause`.
     * @param ctx the parse tree
     */
    exitElseClause?: (ctx: ElseClauseContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.variableDeclaration`.
     * @param ctx the parse tree
     */
    enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.variableDeclaration`.
     * @param ctx the parse tree
     */
    exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.sqlStatementList`.
     * @param ctx the parse tree
     */
    enterSqlStatementList?: (ctx: SqlStatementListContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.sqlStatementList`.
     * @param ctx the parse tree
     */
    exitSqlStatementList?: (ctx: SqlStatementListContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.privilege`.
     * @param ctx the parse tree
     */
    enterPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.privilege`.
     * @param ctx the parse tree
     */
    exitPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.queryPeriod`.
     * @param ctx the parse tree
     */
    enterQueryPeriod?: (ctx: QueryPeriodContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.queryPeriod`.
     * @param ctx the parse tree
     */
    exitQueryPeriod?: (ctx: QueryPeriodContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.rangeType`.
     * @param ctx the parse tree
     */
    enterRangeType?: (ctx: RangeTypeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.rangeType`.
     * @param ctx the parse tree
     */
    exitRangeType?: (ctx: RangeTypeContext) => void;
    /**
     * Enter a parse tree produced by the `specifiedPrincipal`
     * labeled alternative in `TrinoParser.grantor`.
     * @param ctx the parse tree
     */
    enterSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => void;
    /**
     * Exit a parse tree produced by the `specifiedPrincipal`
     * labeled alternative in `TrinoParser.grantor`.
     * @param ctx the parse tree
     */
    exitSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => void;
    /**
     * Enter a parse tree produced by the `currentUserGrantor`
     * labeled alternative in `TrinoParser.grantor`.
     * @param ctx the parse tree
     */
    enterCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => void;
    /**
     * Exit a parse tree produced by the `currentUserGrantor`
     * labeled alternative in `TrinoParser.grantor`.
     * @param ctx the parse tree
     */
    exitCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => void;
    /**
     * Enter a parse tree produced by the `currentRoleGrantor`
     * labeled alternative in `TrinoParser.grantor`.
     * @param ctx the parse tree
     */
    enterCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => void;
    /**
     * Exit a parse tree produced by the `currentRoleGrantor`
     * labeled alternative in `TrinoParser.grantor`.
     * @param ctx the parse tree
     */
    exitCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => void;
    /**
     * Enter a parse tree produced by the `unspecifiedPrincipal`
     * labeled alternative in `TrinoParser.principal`.
     * @param ctx the parse tree
     */
    enterUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => void;
    /**
     * Exit a parse tree produced by the `unspecifiedPrincipal`
     * labeled alternative in `TrinoParser.principal`.
     * @param ctx the parse tree
     */
    exitUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => void;
    /**
     * Enter a parse tree produced by the `userPrincipal`
     * labeled alternative in `TrinoParser.principal`.
     * @param ctx the parse tree
     */
    enterUserPrincipal?: (ctx: UserPrincipalContext) => void;
    /**
     * Exit a parse tree produced by the `userPrincipal`
     * labeled alternative in `TrinoParser.principal`.
     * @param ctx the parse tree
     */
    exitUserPrincipal?: (ctx: UserPrincipalContext) => void;
    /**
     * Enter a parse tree produced by the `rolePrincipal`
     * labeled alternative in `TrinoParser.principal`.
     * @param ctx the parse tree
     */
    enterRolePrincipal?: (ctx: RolePrincipalContext) => void;
    /**
     * Exit a parse tree produced by the `rolePrincipal`
     * labeled alternative in `TrinoParser.principal`.
     * @param ctx the parse tree
     */
    exitRolePrincipal?: (ctx: RolePrincipalContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.roles`.
     * @param ctx the parse tree
     */
    enterRoles?: (ctx: RolesContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.roles`.
     * @param ctx the parse tree
     */
    exitRoles?: (ctx: RolesContext) => void;
    /**
     * Enter a parse tree produced by the `unquotedIdentifier`
     * labeled alternative in `TrinoParser.identifier`.
     * @param ctx the parse tree
     */
    enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `unquotedIdentifier`
     * labeled alternative in `TrinoParser.identifier`.
     * @param ctx the parse tree
     */
    exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `quotedIdentifier`
     * labeled alternative in `TrinoParser.identifier`.
     * @param ctx the parse tree
     */
    enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `quotedIdentifier`
     * labeled alternative in `TrinoParser.identifier`.
     * @param ctx the parse tree
     */
    exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `backQuotedIdentifier`
     * labeled alternative in `TrinoParser.identifier`.
     * @param ctx the parse tree
     */
    enterBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `backQuotedIdentifier`
     * labeled alternative in `TrinoParser.identifier`.
     * @param ctx the parse tree
     */
    exitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `digitIdentifier`
     * labeled alternative in `TrinoParser.identifier`.
     * @param ctx the parse tree
     */
    enterDigitIdentifier?: (ctx: DigitIdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `digitIdentifier`
     * labeled alternative in `TrinoParser.identifier`.
     * @param ctx the parse tree
     */
    exitDigitIdentifier?: (ctx: DigitIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `decimalLiteral`
     * labeled alternative in `TrinoParser.number`.
     * @param ctx the parse tree
     */
    enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `decimalLiteral`
     * labeled alternative in `TrinoParser.number`.
     * @param ctx the parse tree
     */
    exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `doubleLiteral`
     * labeled alternative in `TrinoParser.number`.
     * @param ctx the parse tree
     */
    enterDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `doubleLiteral`
     * labeled alternative in `TrinoParser.number`.
     * @param ctx the parse tree
     */
    exitDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `integerLiteral`
     * labeled alternative in `TrinoParser.number`.
     * @param ctx the parse tree
     */
    enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `integerLiteral`
     * labeled alternative in `TrinoParser.number`.
     * @param ctx the parse tree
     */
    exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `identifierUser`
     * labeled alternative in `TrinoParser.authorizationUser`.
     * @param ctx the parse tree
     */
    enterIdentifierUser?: (ctx: IdentifierUserContext) => void;
    /**
     * Exit a parse tree produced by the `identifierUser`
     * labeled alternative in `TrinoParser.authorizationUser`.
     * @param ctx the parse tree
     */
    exitIdentifierUser?: (ctx: IdentifierUserContext) => void;
    /**
     * Enter a parse tree produced by the `stringUser`
     * labeled alternative in `TrinoParser.authorizationUser`.
     * @param ctx the parse tree
     */
    enterStringUser?: (ctx: StringUserContext) => void;
    /**
     * Exit a parse tree produced by the `stringUser`
     * labeled alternative in `TrinoParser.authorizationUser`.
     * @param ctx the parse tree
     */
    exitStringUser?: (ctx: StringUserContext) => void;
    /**
     * Enter a parse tree produced by `TrinoParser.nonReserved`.
     * @param ctx the parse tree
     */
    enterNonReserved?: (ctx: NonReservedContext) => void;
    /**
     * Exit a parse tree produced by `TrinoParser.nonReserved`.
     * @param ctx the parse tree
     */
    exitNonReserved?: (ctx: NonReservedContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

