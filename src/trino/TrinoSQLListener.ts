// Generated from ./TrinoSQL.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { SingleStatementContext } from "./TrinoSQLParser.js";
import { StandaloneExpressionContext } from "./TrinoSQLParser.js";
import { StandalonePathSpecificationContext } from "./TrinoSQLParser.js";
import { StandaloneTypeContext } from "./TrinoSQLParser.js";
import { StandaloneRowPatternContext } from "./TrinoSQLParser.js";
import { StandaloneFunctionSpecificationContext } from "./TrinoSQLParser.js";
import { StatementDefaultContext } from "./TrinoSQLParser.js";
import { UseContext } from "./TrinoSQLParser.js";
import { CreateCatalogContext } from "./TrinoSQLParser.js";
import { DropCatalogContext } from "./TrinoSQLParser.js";
import { CreateSchemaContext } from "./TrinoSQLParser.js";
import { DropSchemaContext } from "./TrinoSQLParser.js";
import { RenameSchemaContext } from "./TrinoSQLParser.js";
import { SetSchemaAuthorizationContext } from "./TrinoSQLParser.js";
import { CreateTableAsSelectContext } from "./TrinoSQLParser.js";
import { CreateTableContext } from "./TrinoSQLParser.js";
import { DropTableContext } from "./TrinoSQLParser.js";
import { InsertIntoContext } from "./TrinoSQLParser.js";
import { DeleteContext } from "./TrinoSQLParser.js";
import { TruncateTableContext } from "./TrinoSQLParser.js";
import { CommentTableContext } from "./TrinoSQLParser.js";
import { CommentViewContext } from "./TrinoSQLParser.js";
import { CommentColumnContext } from "./TrinoSQLParser.js";
import { RenameTableContext } from "./TrinoSQLParser.js";
import { AddColumnContext } from "./TrinoSQLParser.js";
import { RenameColumnContext } from "./TrinoSQLParser.js";
import { DropColumnContext } from "./TrinoSQLParser.js";
import { SetColumnTypeContext } from "./TrinoSQLParser.js";
import { DropNotNullConstraintContext } from "./TrinoSQLParser.js";
import { SetTableAuthorizationContext } from "./TrinoSQLParser.js";
import { SetTablePropertiesContext } from "./TrinoSQLParser.js";
import { TableExecuteContext } from "./TrinoSQLParser.js";
import { AnalyzeContext } from "./TrinoSQLParser.js";
import { CreateMaterializedViewContext } from "./TrinoSQLParser.js";
import { CreateViewContext } from "./TrinoSQLParser.js";
import { RefreshMaterializedViewContext } from "./TrinoSQLParser.js";
import { DropMaterializedViewContext } from "./TrinoSQLParser.js";
import { RenameMaterializedViewContext } from "./TrinoSQLParser.js";
import { SetMaterializedViewPropertiesContext } from "./TrinoSQLParser.js";
import { DropViewContext } from "./TrinoSQLParser.js";
import { RenameViewContext } from "./TrinoSQLParser.js";
import { SetViewAuthorizationContext } from "./TrinoSQLParser.js";
import { CallContext } from "./TrinoSQLParser.js";
import { CreateFunctionContext } from "./TrinoSQLParser.js";
import { DropFunctionContext } from "./TrinoSQLParser.js";
import { CreateRoleContext } from "./TrinoSQLParser.js";
import { DropRoleContext } from "./TrinoSQLParser.js";
import { GrantRolesContext } from "./TrinoSQLParser.js";
import { GrantPrivilegesContext } from "./TrinoSQLParser.js";
import { RevokeRolesContext } from "./TrinoSQLParser.js";
import { RevokePrivilegesContext } from "./TrinoSQLParser.js";
import { DenyContext } from "./TrinoSQLParser.js";
import { SetRoleContext } from "./TrinoSQLParser.js";
import { ShowGrantsContext } from "./TrinoSQLParser.js";
import { ExplainContext } from "./TrinoSQLParser.js";
import { ExplainAnalyzeContext } from "./TrinoSQLParser.js";
import { ShowCreateTableContext } from "./TrinoSQLParser.js";
import { ShowCreateSchemaContext } from "./TrinoSQLParser.js";
import { ShowCreateViewContext } from "./TrinoSQLParser.js";
import { ShowCreateMaterializedViewContext } from "./TrinoSQLParser.js";
import { ShowTablesContext } from "./TrinoSQLParser.js";
import { ShowSchemasContext } from "./TrinoSQLParser.js";
import { ShowCatalogsContext } from "./TrinoSQLParser.js";
import { ShowColumnsContext } from "./TrinoSQLParser.js";
import { ShowStatsContext } from "./TrinoSQLParser.js";
import { ShowStatsForQueryContext } from "./TrinoSQLParser.js";
import { ShowRolesContext } from "./TrinoSQLParser.js";
import { ShowRoleGrantsContext } from "./TrinoSQLParser.js";
import { ShowFunctionsContext } from "./TrinoSQLParser.js";
import { ShowSessionContext } from "./TrinoSQLParser.js";
import { SetSessionAuthorizationContext } from "./TrinoSQLParser.js";
import { ResetSessionAuthorizationContext } from "./TrinoSQLParser.js";
import { SetSessionContext } from "./TrinoSQLParser.js";
import { ResetSessionContext } from "./TrinoSQLParser.js";
import { StartTransactionContext } from "./TrinoSQLParser.js";
import { CommitContext } from "./TrinoSQLParser.js";
import { RollbackContext } from "./TrinoSQLParser.js";
import { PrepareContext } from "./TrinoSQLParser.js";
import { DeallocateContext } from "./TrinoSQLParser.js";
import { ExecuteContext } from "./TrinoSQLParser.js";
import { ExecuteImmediateContext } from "./TrinoSQLParser.js";
import { DescribeInputContext } from "./TrinoSQLParser.js";
import { DescribeOutputContext } from "./TrinoSQLParser.js";
import { SetPathContext } from "./TrinoSQLParser.js";
import { SetTimeZoneContext } from "./TrinoSQLParser.js";
import { UpdateContext } from "./TrinoSQLParser.js";
import { MergeContext } from "./TrinoSQLParser.js";
import { RootQueryContext } from "./TrinoSQLParser.js";
import { WithFunctionContext } from "./TrinoSQLParser.js";
import { QueryContext } from "./TrinoSQLParser.js";
import { WithContext } from "./TrinoSQLParser.js";
import { TableElementContext } from "./TrinoSQLParser.js";
import { ColumnDefinitionContext } from "./TrinoSQLParser.js";
import { LikeClauseContext } from "./TrinoSQLParser.js";
import { PropertiesContext } from "./TrinoSQLParser.js";
import { PropertyAssignmentsContext } from "./TrinoSQLParser.js";
import { PropertyContext } from "./TrinoSQLParser.js";
import { DefaultPropertyValueContext } from "./TrinoSQLParser.js";
import { NonDefaultPropertyValueContext } from "./TrinoSQLParser.js";
import { QueryNoWithContext } from "./TrinoSQLParser.js";
import { LimitRowCountContext } from "./TrinoSQLParser.js";
import { RowCountContext } from "./TrinoSQLParser.js";
import { QueryTermDefaultContext } from "./TrinoSQLParser.js";
import { SetOperationContext } from "./TrinoSQLParser.js";
import { QueryPrimaryDefaultContext } from "./TrinoSQLParser.js";
import { TableContext } from "./TrinoSQLParser.js";
import { InlineTableContext } from "./TrinoSQLParser.js";
import { SubqueryContext } from "./TrinoSQLParser.js";
import { SortItemContext } from "./TrinoSQLParser.js";
import { QuerySpecificationContext } from "./TrinoSQLParser.js";
import { GroupByContext } from "./TrinoSQLParser.js";
import { SingleGroupingSetContext } from "./TrinoSQLParser.js";
import { RollupContext } from "./TrinoSQLParser.js";
import { CubeContext } from "./TrinoSQLParser.js";
import { MultipleGroupingSetsContext } from "./TrinoSQLParser.js";
import { GroupingSetContext } from "./TrinoSQLParser.js";
import { WindowDefinitionContext } from "./TrinoSQLParser.js";
import { WindowSpecificationContext } from "./TrinoSQLParser.js";
import { NamedQueryContext } from "./TrinoSQLParser.js";
import { SetQuantifierContext } from "./TrinoSQLParser.js";
import { SelectSingleContext } from "./TrinoSQLParser.js";
import { SelectAllContext } from "./TrinoSQLParser.js";
import { RelationDefaultContext } from "./TrinoSQLParser.js";
import { JoinRelationContext } from "./TrinoSQLParser.js";
import { JoinTypeContext } from "./TrinoSQLParser.js";
import { JoinCriteriaContext } from "./TrinoSQLParser.js";
import { SampledRelationContext } from "./TrinoSQLParser.js";
import { SampleTypeContext } from "./TrinoSQLParser.js";
import { TrimsSpecificationContext } from "./TrinoSQLParser.js";
import { ListAggOverflowBehaviorContext } from "./TrinoSQLParser.js";
import { ListaggCountIndicationContext } from "./TrinoSQLParser.js";
import { PatternRecognitionContext } from "./TrinoSQLParser.js";
import { MeasureDefinitionContext } from "./TrinoSQLParser.js";
import { RowsPerMatchContext } from "./TrinoSQLParser.js";
import { EmptyMatchHandlingContext } from "./TrinoSQLParser.js";
import { SkipToContext } from "./TrinoSQLParser.js";
import { SubsetDefinitionContext } from "./TrinoSQLParser.js";
import { VariableDefinitionContext } from "./TrinoSQLParser.js";
import { AliasedRelationContext } from "./TrinoSQLParser.js";
import { ColumnAliasesContext } from "./TrinoSQLParser.js";
import { TableNameContext } from "./TrinoSQLParser.js";
import { SubqueryRelationContext } from "./TrinoSQLParser.js";
import { UnnestContext } from "./TrinoSQLParser.js";
import { LateralContext } from "./TrinoSQLParser.js";
import { TableFunctionInvocationContext } from "./TrinoSQLParser.js";
import { ParenthesizedRelationContext } from "./TrinoSQLParser.js";
import { JsonTableContext } from "./TrinoSQLParser.js";
import { OrdinalityColumnContext } from "./TrinoSQLParser.js";
import { ValueColumnContext } from "./TrinoSQLParser.js";
import { QueryColumnContext } from "./TrinoSQLParser.js";
import { NestedColumnsContext } from "./TrinoSQLParser.js";
import { LeafPlanContext } from "./TrinoSQLParser.js";
import { JoinPlanContext } from "./TrinoSQLParser.js";
import { UnionPlanContext } from "./TrinoSQLParser.js";
import { CrossPlanContext } from "./TrinoSQLParser.js";
import { JsonTablePathNameContext } from "./TrinoSQLParser.js";
import { PlanPrimaryContext } from "./TrinoSQLParser.js";
import { JsonTableDefaultPlanContext } from "./TrinoSQLParser.js";
import { TableFunctionCallContext } from "./TrinoSQLParser.js";
import { TableFunctionArgumentContext } from "./TrinoSQLParser.js";
import { TableArgumentContext } from "./TrinoSQLParser.js";
import { TableArgumentTableContext } from "./TrinoSQLParser.js";
import { TableArgumentQueryContext } from "./TrinoSQLParser.js";
import { DescriptorArgumentContext } from "./TrinoSQLParser.js";
import { DescriptorFieldContext } from "./TrinoSQLParser.js";
import { CopartitionTablesContext } from "./TrinoSQLParser.js";
import { ExpressionContext } from "./TrinoSQLParser.js";
import { LogicalNotContext } from "./TrinoSQLParser.js";
import { PredicatedContext } from "./TrinoSQLParser.js";
import { OrContext } from "./TrinoSQLParser.js";
import { AndContext } from "./TrinoSQLParser.js";
import { ComparisonContext } from "./TrinoSQLParser.js";
import { QuantifiedComparisonContext } from "./TrinoSQLParser.js";
import { BetweenContext } from "./TrinoSQLParser.js";
import { InListContext } from "./TrinoSQLParser.js";
import { InSubqueryContext } from "./TrinoSQLParser.js";
import { LikeContext } from "./TrinoSQLParser.js";
import { NullPredicateContext } from "./TrinoSQLParser.js";
import { DistinctFromContext } from "./TrinoSQLParser.js";
import { ValueExpressionDefaultContext } from "./TrinoSQLParser.js";
import { ConcatenationContext } from "./TrinoSQLParser.js";
import { ArithmeticBinaryContext } from "./TrinoSQLParser.js";
import { ArithmeticUnaryContext } from "./TrinoSQLParser.js";
import { AtTimeZoneContext } from "./TrinoSQLParser.js";
import { DereferenceContext } from "./TrinoSQLParser.js";
import { TypeConstructorContext } from "./TrinoSQLParser.js";
import { JsonValueContext } from "./TrinoSQLParser.js";
import { CurrentDateContext } from "./TrinoSQLParser.js";
import { SubstringContext } from "./TrinoSQLParser.js";
import { CastContext } from "./TrinoSQLParser.js";
import { LambdaContext } from "./TrinoSQLParser.js";
import { ParenthesizedExpressionContext } from "./TrinoSQLParser.js";
import { TrimContext } from "./TrinoSQLParser.js";
import { ParameterContext } from "./TrinoSQLParser.js";
import { NormalizeContext } from "./TrinoSQLParser.js";
import { LocalTimestampContext } from "./TrinoSQLParser.js";
import { JsonObjectContext } from "./TrinoSQLParser.js";
import { IntervalLiteralContext } from "./TrinoSQLParser.js";
import { NumericLiteralContext } from "./TrinoSQLParser.js";
import { BooleanLiteralContext } from "./TrinoSQLParser.js";
import { JsonArrayContext } from "./TrinoSQLParser.js";
import { SimpleCaseContext } from "./TrinoSQLParser.js";
import { ColumnReferenceContext } from "./TrinoSQLParser.js";
import { NullLiteralContext } from "./TrinoSQLParser.js";
import { RowConstructorContext } from "./TrinoSQLParser.js";
import { SubscriptContext } from "./TrinoSQLParser.js";
import { JsonExistsContext } from "./TrinoSQLParser.js";
import { CurrentPathContext } from "./TrinoSQLParser.js";
import { SubqueryExpressionContext } from "./TrinoSQLParser.js";
import { BinaryLiteralContext } from "./TrinoSQLParser.js";
import { CurrentTimeContext } from "./TrinoSQLParser.js";
import { LocalTimeContext } from "./TrinoSQLParser.js";
import { CurrentUserContext } from "./TrinoSQLParser.js";
import { JsonQueryContext } from "./TrinoSQLParser.js";
import { MeasureContext } from "./TrinoSQLParser.js";
import { ExtractContext } from "./TrinoSQLParser.js";
import { StringLiteralContext } from "./TrinoSQLParser.js";
import { ArrayConstructorContext } from "./TrinoSQLParser.js";
import { FunctionCallContext } from "./TrinoSQLParser.js";
import { CurrentTimestampContext } from "./TrinoSQLParser.js";
import { CurrentSchemaContext } from "./TrinoSQLParser.js";
import { ExistsContext } from "./TrinoSQLParser.js";
import { PositionContext } from "./TrinoSQLParser.js";
import { ListaggContext } from "./TrinoSQLParser.js";
import { SearchedCaseContext } from "./TrinoSQLParser.js";
import { CurrentCatalogContext } from "./TrinoSQLParser.js";
import { GroupingOperationContext } from "./TrinoSQLParser.js";
import { JsonPathInvocationContext } from "./TrinoSQLParser.js";
import { JsonValueExpressionContext } from "./TrinoSQLParser.js";
import { JsonRepresentationContext } from "./TrinoSQLParser.js";
import { JsonArgumentContext } from "./TrinoSQLParser.js";
import { JsonExistsErrorBehaviorContext } from "./TrinoSQLParser.js";
import { JsonValueBehaviorContext } from "./TrinoSQLParser.js";
import { JsonQueryWrapperBehaviorContext } from "./TrinoSQLParser.js";
import { JsonQueryBehaviorContext } from "./TrinoSQLParser.js";
import { JsonObjectMemberContext } from "./TrinoSQLParser.js";
import { ProcessingModeContext } from "./TrinoSQLParser.js";
import { NullTreatmentContext } from "./TrinoSQLParser.js";
import { BasicStringLiteralContext } from "./TrinoSQLParser.js";
import { UnicodeStringLiteralContext } from "./TrinoSQLParser.js";
import { TimeZoneIntervalContext } from "./TrinoSQLParser.js";
import { TimeZoneStringContext } from "./TrinoSQLParser.js";
import { ComparisonOperatorContext } from "./TrinoSQLParser.js";
import { ComparisonQuantifierContext } from "./TrinoSQLParser.js";
import { BooleanValueContext } from "./TrinoSQLParser.js";
import { IntervalContext } from "./TrinoSQLParser.js";
import { IntervalFieldContext } from "./TrinoSQLParser.js";
import { NormalFormContext } from "./TrinoSQLParser.js";
import { RowTypeContext } from "./TrinoSQLParser.js";
import { IntervalTypeContext } from "./TrinoSQLParser.js";
import { ArrayTypeContext } from "./TrinoSQLParser.js";
import { DoublePrecisionTypeContext } from "./TrinoSQLParser.js";
import { LegacyArrayTypeContext } from "./TrinoSQLParser.js";
import { GenericTypeContext } from "./TrinoSQLParser.js";
import { DateTimeTypeContext } from "./TrinoSQLParser.js";
import { LegacyMapTypeContext } from "./TrinoSQLParser.js";
import { RowFieldContext } from "./TrinoSQLParser.js";
import { TypeParameterContext } from "./TrinoSQLParser.js";
import { WhenClauseContext } from "./TrinoSQLParser.js";
import { FilterContext } from "./TrinoSQLParser.js";
import { MergeUpdateContext } from "./TrinoSQLParser.js";
import { MergeDeleteContext } from "./TrinoSQLParser.js";
import { MergeInsertContext } from "./TrinoSQLParser.js";
import { OverContext } from "./TrinoSQLParser.js";
import { WindowFrameContext } from "./TrinoSQLParser.js";
import { FrameExtentContext } from "./TrinoSQLParser.js";
import { UnboundedFrameContext } from "./TrinoSQLParser.js";
import { CurrentRowBoundContext } from "./TrinoSQLParser.js";
import { BoundedFrameContext } from "./TrinoSQLParser.js";
import { QuantifiedPrimaryContext } from "./TrinoSQLParser.js";
import { PatternConcatenationContext } from "./TrinoSQLParser.js";
import { PatternAlternationContext } from "./TrinoSQLParser.js";
import { PatternVariableContext } from "./TrinoSQLParser.js";
import { EmptyPatternContext } from "./TrinoSQLParser.js";
import { PatternPermutationContext } from "./TrinoSQLParser.js";
import { GroupedPatternContext } from "./TrinoSQLParser.js";
import { PartitionStartAnchorContext } from "./TrinoSQLParser.js";
import { PartitionEndAnchorContext } from "./TrinoSQLParser.js";
import { ExcludedPatternContext } from "./TrinoSQLParser.js";
import { ZeroOrMoreQuantifierContext } from "./TrinoSQLParser.js";
import { OneOrMoreQuantifierContext } from "./TrinoSQLParser.js";
import { ZeroOrOneQuantifierContext } from "./TrinoSQLParser.js";
import { RangeQuantifierContext } from "./TrinoSQLParser.js";
import { UpdateAssignmentContext } from "./TrinoSQLParser.js";
import { ExplainFormatContext } from "./TrinoSQLParser.js";
import { ExplainTypeContext } from "./TrinoSQLParser.js";
import { IsolationLevelContext } from "./TrinoSQLParser.js";
import { TransactionAccessModeContext } from "./TrinoSQLParser.js";
import { ReadUncommittedContext } from "./TrinoSQLParser.js";
import { ReadCommittedContext } from "./TrinoSQLParser.js";
import { RepeatableReadContext } from "./TrinoSQLParser.js";
import { SerializableContext } from "./TrinoSQLParser.js";
import { PositionalArgumentContext } from "./TrinoSQLParser.js";
import { NamedArgumentContext } from "./TrinoSQLParser.js";
import { QualifiedArgumentContext } from "./TrinoSQLParser.js";
import { UnqualifiedArgumentContext } from "./TrinoSQLParser.js";
import { PathSpecificationContext } from "./TrinoSQLParser.js";
import { FunctionSpecificationContext } from "./TrinoSQLParser.js";
import { FunctionDeclarationContext } from "./TrinoSQLParser.js";
import { ParameterDeclarationContext } from "./TrinoSQLParser.js";
import { ReturnsClauseContext } from "./TrinoSQLParser.js";
import { LanguageCharacteristicContext } from "./TrinoSQLParser.js";
import { DeterministicCharacteristicContext } from "./TrinoSQLParser.js";
import { ReturnsNullOnNullInputCharacteristicContext } from "./TrinoSQLParser.js";
import { CalledOnNullInputCharacteristicContext } from "./TrinoSQLParser.js";
import { SecurityCharacteristicContext } from "./TrinoSQLParser.js";
import { CommentCharacteristicContext } from "./TrinoSQLParser.js";
import { ReturnStatementContext } from "./TrinoSQLParser.js";
import { AssignmentStatementContext } from "./TrinoSQLParser.js";
import { SimpleCaseStatementContext } from "./TrinoSQLParser.js";
import { SearchedCaseStatementContext } from "./TrinoSQLParser.js";
import { IfStatementContext } from "./TrinoSQLParser.js";
import { IterateStatementContext } from "./TrinoSQLParser.js";
import { LeaveStatementContext } from "./TrinoSQLParser.js";
import { CompoundStatementContext } from "./TrinoSQLParser.js";
import { LoopStatementContext } from "./TrinoSQLParser.js";
import { WhileStatementContext } from "./TrinoSQLParser.js";
import { RepeatStatementContext } from "./TrinoSQLParser.js";
import { CaseStatementWhenClauseContext } from "./TrinoSQLParser.js";
import { ElseIfClauseContext } from "./TrinoSQLParser.js";
import { ElseClauseContext } from "./TrinoSQLParser.js";
import { VariableDeclarationContext } from "./TrinoSQLParser.js";
import { SqlStatementListContext } from "./TrinoSQLParser.js";
import { PrivilegeContext } from "./TrinoSQLParser.js";
import { EntityKindContext } from "./TrinoSQLParser.js";
import { GrantObjectContext } from "./TrinoSQLParser.js";
import { QualifiedNameContext } from "./TrinoSQLParser.js";
import { QueryPeriodContext } from "./TrinoSQLParser.js";
import { RangeTypeContext } from "./TrinoSQLParser.js";
import { SpecifiedPrincipalContext } from "./TrinoSQLParser.js";
import { CurrentUserGrantorContext } from "./TrinoSQLParser.js";
import { CurrentRoleGrantorContext } from "./TrinoSQLParser.js";
import { UnspecifiedPrincipalContext } from "./TrinoSQLParser.js";
import { UserPrincipalContext } from "./TrinoSQLParser.js";
import { RolePrincipalContext } from "./TrinoSQLParser.js";
import { RolesContext } from "./TrinoSQLParser.js";
import { PrivilegeOrRoleContext } from "./TrinoSQLParser.js";
import { UnquotedIdentifierContext } from "./TrinoSQLParser.js";
import { QuotedIdentifierContext } from "./TrinoSQLParser.js";
import { BackQuotedIdentifierContext } from "./TrinoSQLParser.js";
import { DigitIdentifierContext } from "./TrinoSQLParser.js";
import { DecimalLiteralContext } from "./TrinoSQLParser.js";
import { DoubleLiteralContext } from "./TrinoSQLParser.js";
import { IntegerLiteralContext } from "./TrinoSQLParser.js";
import { IdentifierUserContext } from "./TrinoSQLParser.js";
import { StringUserContext } from "./TrinoSQLParser.js";
import { NonReservedContext } from "./TrinoSQLParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TrinoSQLParser`.
 */
export class TrinoSQLListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `TrinoSQLParser.singleStatement`.
     * @param ctx the parse tree
     */
    enterSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.singleStatement`.
     * @param ctx the parse tree
     */
    exitSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.standaloneExpression`.
     * @param ctx the parse tree
     */
    enterStandaloneExpression?: (ctx: StandaloneExpressionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.standaloneExpression`.
     * @param ctx the parse tree
     */
    exitStandaloneExpression?: (ctx: StandaloneExpressionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.standalonePathSpecification`.
     * @param ctx the parse tree
     */
    enterStandalonePathSpecification?: (ctx: StandalonePathSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.standalonePathSpecification`.
     * @param ctx the parse tree
     */
    exitStandalonePathSpecification?: (ctx: StandalonePathSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.standaloneType`.
     * @param ctx the parse tree
     */
    enterStandaloneType?: (ctx: StandaloneTypeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.standaloneType`.
     * @param ctx the parse tree
     */
    exitStandaloneType?: (ctx: StandaloneTypeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.standaloneRowPattern`.
     * @param ctx the parse tree
     */
    enterStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.standaloneRowPattern`.
     * @param ctx the parse tree
     */
    exitStandaloneRowPattern?: (ctx: StandaloneRowPatternContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.standaloneFunctionSpecification`.
     * @param ctx the parse tree
     */
    enterStandaloneFunctionSpecification?: (ctx: StandaloneFunctionSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.standaloneFunctionSpecification`.
     * @param ctx the parse tree
     */
    exitStandaloneFunctionSpecification?: (ctx: StandaloneFunctionSpecificationContext) => void;
    /**
     * Enter a parse tree produced by the `statementDefault`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `statementDefault`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `use`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterUse?: (ctx: UseContext) => void;
    /**
     * Exit a parse tree produced by the `use`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitUse?: (ctx: UseContext) => void;
    /**
     * Enter a parse tree produced by the `createCatalog`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateCatalog?: (ctx: CreateCatalogContext) => void;
    /**
     * Exit a parse tree produced by the `createCatalog`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateCatalog?: (ctx: CreateCatalogContext) => void;
    /**
     * Enter a parse tree produced by the `dropCatalog`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropCatalog?: (ctx: DropCatalogContext) => void;
    /**
     * Exit a parse tree produced by the `dropCatalog`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropCatalog?: (ctx: DropCatalogContext) => void;
    /**
     * Enter a parse tree produced by the `createSchema`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateSchema?: (ctx: CreateSchemaContext) => void;
    /**
     * Exit a parse tree produced by the `createSchema`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateSchema?: (ctx: CreateSchemaContext) => void;
    /**
     * Enter a parse tree produced by the `dropSchema`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropSchema?: (ctx: DropSchemaContext) => void;
    /**
     * Exit a parse tree produced by the `dropSchema`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropSchema?: (ctx: DropSchemaContext) => void;
    /**
     * Enter a parse tree produced by the `renameSchema`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameSchema?: (ctx: RenameSchemaContext) => void;
    /**
     * Exit a parse tree produced by the `renameSchema`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameSchema?: (ctx: RenameSchemaContext) => void;
    /**
     * Enter a parse tree produced by the `setSchemaAuthorization`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetSchemaAuthorization?: (ctx: SetSchemaAuthorizationContext) => void;
    /**
     * Exit a parse tree produced by the `setSchemaAuthorization`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetSchemaAuthorization?: (ctx: SetSchemaAuthorizationContext) => void;
    /**
     * Enter a parse tree produced by the `createTableAsSelect`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => void;
    /**
     * Exit a parse tree produced by the `createTableAsSelect`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => void;
    /**
     * Enter a parse tree produced by the `createTable`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `createTable`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `dropTable`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropTable?: (ctx: DropTableContext) => void;
    /**
     * Exit a parse tree produced by the `dropTable`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropTable?: (ctx: DropTableContext) => void;
    /**
     * Enter a parse tree produced by the `insertInto`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterInsertInto?: (ctx: InsertIntoContext) => void;
    /**
     * Exit a parse tree produced by the `insertInto`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitInsertInto?: (ctx: InsertIntoContext) => void;
    /**
     * Enter a parse tree produced by the `delete`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDelete?: (ctx: DeleteContext) => void;
    /**
     * Exit a parse tree produced by the `delete`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDelete?: (ctx: DeleteContext) => void;
    /**
     * Enter a parse tree produced by the `truncateTable`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Exit a parse tree produced by the `truncateTable`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Enter a parse tree produced by the `commentTable`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCommentTable?: (ctx: CommentTableContext) => void;
    /**
     * Exit a parse tree produced by the `commentTable`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCommentTable?: (ctx: CommentTableContext) => void;
    /**
     * Enter a parse tree produced by the `commentView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCommentView?: (ctx: CommentViewContext) => void;
    /**
     * Exit a parse tree produced by the `commentView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCommentView?: (ctx: CommentViewContext) => void;
    /**
     * Enter a parse tree produced by the `commentColumn`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCommentColumn?: (ctx: CommentColumnContext) => void;
    /**
     * Exit a parse tree produced by the `commentColumn`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCommentColumn?: (ctx: CommentColumnContext) => void;
    /**
     * Enter a parse tree produced by the `renameTable`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Exit a parse tree produced by the `renameTable`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Enter a parse tree produced by the `addColumn`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterAddColumn?: (ctx: AddColumnContext) => void;
    /**
     * Exit a parse tree produced by the `addColumn`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitAddColumn?: (ctx: AddColumnContext) => void;
    /**
     * Enter a parse tree produced by the `renameColumn`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameColumn?: (ctx: RenameColumnContext) => void;
    /**
     * Exit a parse tree produced by the `renameColumn`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameColumn?: (ctx: RenameColumnContext) => void;
    /**
     * Enter a parse tree produced by the `dropColumn`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropColumn?: (ctx: DropColumnContext) => void;
    /**
     * Exit a parse tree produced by the `dropColumn`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropColumn?: (ctx: DropColumnContext) => void;
    /**
     * Enter a parse tree produced by the `setColumnType`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetColumnType?: (ctx: SetColumnTypeContext) => void;
    /**
     * Exit a parse tree produced by the `setColumnType`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetColumnType?: (ctx: SetColumnTypeContext) => void;
    /**
     * Enter a parse tree produced by the `dropNotNullConstraint`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropNotNullConstraint?: (ctx: DropNotNullConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `dropNotNullConstraint`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropNotNullConstraint?: (ctx: DropNotNullConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `setTableAuthorization`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTableAuthorization?: (ctx: SetTableAuthorizationContext) => void;
    /**
     * Exit a parse tree produced by the `setTableAuthorization`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTableAuthorization?: (ctx: SetTableAuthorizationContext) => void;
    /**
     * Enter a parse tree produced by the `setTableProperties`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTableProperties?: (ctx: SetTablePropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `setTableProperties`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTableProperties?: (ctx: SetTablePropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `tableExecute`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterTableExecute?: (ctx: TableExecuteContext) => void;
    /**
     * Exit a parse tree produced by the `tableExecute`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitTableExecute?: (ctx: TableExecuteContext) => void;
    /**
     * Enter a parse tree produced by the `analyze`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterAnalyze?: (ctx: AnalyzeContext) => void;
    /**
     * Exit a parse tree produced by the `analyze`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitAnalyze?: (ctx: AnalyzeContext) => void;
    /**
     * Enter a parse tree produced by the `createMaterializedView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `createMaterializedView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `createView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Exit a parse tree produced by the `createView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Enter a parse tree produced by the `refreshMaterializedView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `refreshMaterializedView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRefreshMaterializedView?: (ctx: RefreshMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `dropMaterializedView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropMaterializedView?: (ctx: DropMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `dropMaterializedView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropMaterializedView?: (ctx: DropMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `renameMaterializedView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameMaterializedView?: (ctx: RenameMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `renameMaterializedView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameMaterializedView?: (ctx: RenameMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `setMaterializedViewProperties`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetMaterializedViewProperties?: (ctx: SetMaterializedViewPropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `setMaterializedViewProperties`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetMaterializedViewProperties?: (ctx: SetMaterializedViewPropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `dropView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropView?: (ctx: DropViewContext) => void;
    /**
     * Exit a parse tree produced by the `dropView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropView?: (ctx: DropViewContext) => void;
    /**
     * Enter a parse tree produced by the `renameView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRenameView?: (ctx: RenameViewContext) => void;
    /**
     * Exit a parse tree produced by the `renameView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRenameView?: (ctx: RenameViewContext) => void;
    /**
     * Enter a parse tree produced by the `setViewAuthorization`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetViewAuthorization?: (ctx: SetViewAuthorizationContext) => void;
    /**
     * Exit a parse tree produced by the `setViewAuthorization`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetViewAuthorization?: (ctx: SetViewAuthorizationContext) => void;
    /**
     * Enter a parse tree produced by the `call`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCall?: (ctx: CallContext) => void;
    /**
     * Exit a parse tree produced by the `call`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCall?: (ctx: CallContext) => void;
    /**
     * Enter a parse tree produced by the `createFunction`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `createFunction`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `dropFunction`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `dropFunction`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `createRole`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateRole?: (ctx: CreateRoleContext) => void;
    /**
     * Exit a parse tree produced by the `createRole`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateRole?: (ctx: CreateRoleContext) => void;
    /**
     * Enter a parse tree produced by the `dropRole`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDropRole?: (ctx: DropRoleContext) => void;
    /**
     * Exit a parse tree produced by the `dropRole`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDropRole?: (ctx: DropRoleContext) => void;
    /**
     * Enter a parse tree produced by the `grantRoles`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterGrantRoles?: (ctx: GrantRolesContext) => void;
    /**
     * Exit a parse tree produced by the `grantRoles`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitGrantRoles?: (ctx: GrantRolesContext) => void;
    /**
     * Enter a parse tree produced by the `grantPrivileges`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterGrantPrivileges?: (ctx: GrantPrivilegesContext) => void;
    /**
     * Exit a parse tree produced by the `grantPrivileges`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitGrantPrivileges?: (ctx: GrantPrivilegesContext) => void;
    /**
     * Enter a parse tree produced by the `revokeRoles`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRevokeRoles?: (ctx: RevokeRolesContext) => void;
    /**
     * Exit a parse tree produced by the `revokeRoles`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRevokeRoles?: (ctx: RevokeRolesContext) => void;
    /**
     * Enter a parse tree produced by the `revokePrivileges`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRevokePrivileges?: (ctx: RevokePrivilegesContext) => void;
    /**
     * Exit a parse tree produced by the `revokePrivileges`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRevokePrivileges?: (ctx: RevokePrivilegesContext) => void;
    /**
     * Enter a parse tree produced by the `deny`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDeny?: (ctx: DenyContext) => void;
    /**
     * Exit a parse tree produced by the `deny`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDeny?: (ctx: DenyContext) => void;
    /**
     * Enter a parse tree produced by the `setRole`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetRole?: (ctx: SetRoleContext) => void;
    /**
     * Exit a parse tree produced by the `setRole`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetRole?: (ctx: SetRoleContext) => void;
    /**
     * Enter a parse tree produced by the `showGrants`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowGrants?: (ctx: ShowGrantsContext) => void;
    /**
     * Exit a parse tree produced by the `showGrants`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowGrants?: (ctx: ShowGrantsContext) => void;
    /**
     * Enter a parse tree produced by the `explain`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterExplain?: (ctx: ExplainContext) => void;
    /**
     * Exit a parse tree produced by the `explain`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitExplain?: (ctx: ExplainContext) => void;
    /**
     * Enter a parse tree produced by the `explainAnalyze`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterExplainAnalyze?: (ctx: ExplainAnalyzeContext) => void;
    /**
     * Exit a parse tree produced by the `explainAnalyze`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitExplainAnalyze?: (ctx: ExplainAnalyzeContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateTable`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateTable?: (ctx: ShowCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateTable`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateTable?: (ctx: ShowCreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateSchema`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateSchema?: (ctx: ShowCreateSchemaContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateSchema`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateSchema?: (ctx: ShowCreateSchemaContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateView?: (ctx: ShowCreateViewContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateView?: (ctx: ShowCreateViewContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `showTables`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowTables?: (ctx: ShowTablesContext) => void;
    /**
     * Exit a parse tree produced by the `showTables`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowTables?: (ctx: ShowTablesContext) => void;
    /**
     * Enter a parse tree produced by the `showSchemas`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowSchemas?: (ctx: ShowSchemasContext) => void;
    /**
     * Exit a parse tree produced by the `showSchemas`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowSchemas?: (ctx: ShowSchemasContext) => void;
    /**
     * Enter a parse tree produced by the `showCatalogs`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCatalogs?: (ctx: ShowCatalogsContext) => void;
    /**
     * Exit a parse tree produced by the `showCatalogs`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCatalogs?: (ctx: ShowCatalogsContext) => void;
    /**
     * Enter a parse tree produced by the `showColumns`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `showColumns`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `showStats`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowStats?: (ctx: ShowStatsContext) => void;
    /**
     * Exit a parse tree produced by the `showStats`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowStats?: (ctx: ShowStatsContext) => void;
    /**
     * Enter a parse tree produced by the `showStatsForQuery`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowStatsForQuery?: (ctx: ShowStatsForQueryContext) => void;
    /**
     * Exit a parse tree produced by the `showStatsForQuery`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowStatsForQuery?: (ctx: ShowStatsForQueryContext) => void;
    /**
     * Enter a parse tree produced by the `showRoles`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowRoles?: (ctx: ShowRolesContext) => void;
    /**
     * Exit a parse tree produced by the `showRoles`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowRoles?: (ctx: ShowRolesContext) => void;
    /**
     * Enter a parse tree produced by the `showRoleGrants`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;
    /**
     * Exit a parse tree produced by the `showRoleGrants`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;
    /**
     * Enter a parse tree produced by the `showFunctions`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Exit a parse tree produced by the `showFunctions`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Enter a parse tree produced by the `showSession`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterShowSession?: (ctx: ShowSessionContext) => void;
    /**
     * Exit a parse tree produced by the `showSession`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitShowSession?: (ctx: ShowSessionContext) => void;
    /**
     * Enter a parse tree produced by the `setSessionAuthorization`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetSessionAuthorization?: (ctx: SetSessionAuthorizationContext) => void;
    /**
     * Exit a parse tree produced by the `setSessionAuthorization`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetSessionAuthorization?: (ctx: SetSessionAuthorizationContext) => void;
    /**
     * Enter a parse tree produced by the `resetSessionAuthorization`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterResetSessionAuthorization?: (ctx: ResetSessionAuthorizationContext) => void;
    /**
     * Exit a parse tree produced by the `resetSessionAuthorization`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitResetSessionAuthorization?: (ctx: ResetSessionAuthorizationContext) => void;
    /**
     * Enter a parse tree produced by the `setSession`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetSession?: (ctx: SetSessionContext) => void;
    /**
     * Exit a parse tree produced by the `setSession`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetSession?: (ctx: SetSessionContext) => void;
    /**
     * Enter a parse tree produced by the `resetSession`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterResetSession?: (ctx: ResetSessionContext) => void;
    /**
     * Exit a parse tree produced by the `resetSession`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitResetSession?: (ctx: ResetSessionContext) => void;
    /**
     * Enter a parse tree produced by the `startTransaction`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterStartTransaction?: (ctx: StartTransactionContext) => void;
    /**
     * Exit a parse tree produced by the `startTransaction`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitStartTransaction?: (ctx: StartTransactionContext) => void;
    /**
     * Enter a parse tree produced by the `commit`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterCommit?: (ctx: CommitContext) => void;
    /**
     * Exit a parse tree produced by the `commit`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitCommit?: (ctx: CommitContext) => void;
    /**
     * Enter a parse tree produced by the `rollback`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterRollback?: (ctx: RollbackContext) => void;
    /**
     * Exit a parse tree produced by the `rollback`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitRollback?: (ctx: RollbackContext) => void;
    /**
     * Enter a parse tree produced by the `prepare`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterPrepare?: (ctx: PrepareContext) => void;
    /**
     * Exit a parse tree produced by the `prepare`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitPrepare?: (ctx: PrepareContext) => void;
    /**
     * Enter a parse tree produced by the `deallocate`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDeallocate?: (ctx: DeallocateContext) => void;
    /**
     * Exit a parse tree produced by the `deallocate`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDeallocate?: (ctx: DeallocateContext) => void;
    /**
     * Enter a parse tree produced by the `execute`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterExecute?: (ctx: ExecuteContext) => void;
    /**
     * Exit a parse tree produced by the `execute`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitExecute?: (ctx: ExecuteContext) => void;
    /**
     * Enter a parse tree produced by the `executeImmediate`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterExecuteImmediate?: (ctx: ExecuteImmediateContext) => void;
    /**
     * Exit a parse tree produced by the `executeImmediate`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitExecuteImmediate?: (ctx: ExecuteImmediateContext) => void;
    /**
     * Enter a parse tree produced by the `describeInput`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeInput?: (ctx: DescribeInputContext) => void;
    /**
     * Exit a parse tree produced by the `describeInput`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeInput?: (ctx: DescribeInputContext) => void;
    /**
     * Enter a parse tree produced by the `describeOutput`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterDescribeOutput?: (ctx: DescribeOutputContext) => void;
    /**
     * Exit a parse tree produced by the `describeOutput`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitDescribeOutput?: (ctx: DescribeOutputContext) => void;
    /**
     * Enter a parse tree produced by the `setPath`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetPath?: (ctx: SetPathContext) => void;
    /**
     * Exit a parse tree produced by the `setPath`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetPath?: (ctx: SetPathContext) => void;
    /**
     * Enter a parse tree produced by the `setTimeZone`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterSetTimeZone?: (ctx: SetTimeZoneContext) => void;
    /**
     * Exit a parse tree produced by the `setTimeZone`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitSetTimeZone?: (ctx: SetTimeZoneContext) => void;
    /**
     * Enter a parse tree produced by the `update`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterUpdate?: (ctx: UpdateContext) => void;
    /**
     * Exit a parse tree produced by the `update`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitUpdate?: (ctx: UpdateContext) => void;
    /**
     * Enter a parse tree produced by the `merge`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterMerge?: (ctx: MergeContext) => void;
    /**
     * Exit a parse tree produced by the `merge`
     * labeled alternative in `TrinoSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitMerge?: (ctx: MergeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.rootQuery`.
     * @param ctx the parse tree
     */
    enterRootQuery?: (ctx: RootQueryContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.rootQuery`.
     * @param ctx the parse tree
     */
    exitRootQuery?: (ctx: RootQueryContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.withFunction`.
     * @param ctx the parse tree
     */
    enterWithFunction?: (ctx: WithFunctionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.withFunction`.
     * @param ctx the parse tree
     */
    exitWithFunction?: (ctx: WithFunctionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.query`.
     * @param ctx the parse tree
     */
    enterQuery?: (ctx: QueryContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.query`.
     * @param ctx the parse tree
     */
    exitQuery?: (ctx: QueryContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.with`.
     * @param ctx the parse tree
     */
    enterWith?: (ctx: WithContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.with`.
     * @param ctx the parse tree
     */
    exitWith?: (ctx: WithContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.tableElement`.
     * @param ctx the parse tree
     */
    enterTableElement?: (ctx: TableElementContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.tableElement`.
     * @param ctx the parse tree
     */
    exitTableElement?: (ctx: TableElementContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.columnDefinition`.
     * @param ctx the parse tree
     */
    enterColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.columnDefinition`.
     * @param ctx the parse tree
     */
    exitColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.likeClause`.
     * @param ctx the parse tree
     */
    enterLikeClause?: (ctx: LikeClauseContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.likeClause`.
     * @param ctx the parse tree
     */
    exitLikeClause?: (ctx: LikeClauseContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.properties`.
     * @param ctx the parse tree
     */
    enterProperties?: (ctx: PropertiesContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.properties`.
     * @param ctx the parse tree
     */
    exitProperties?: (ctx: PropertiesContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.propertyAssignments`.
     * @param ctx the parse tree
     */
    enterPropertyAssignments?: (ctx: PropertyAssignmentsContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.propertyAssignments`.
     * @param ctx the parse tree
     */
    exitPropertyAssignments?: (ctx: PropertyAssignmentsContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.property`.
     * @param ctx the parse tree
     */
    enterProperty?: (ctx: PropertyContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.property`.
     * @param ctx the parse tree
     */
    exitProperty?: (ctx: PropertyContext) => void;
    /**
     * Enter a parse tree produced by the `defaultPropertyValue`
     * labeled alternative in `TrinoSQLParser.propertyValue`.
     * @param ctx the parse tree
     */
    enterDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => void;
    /**
     * Exit a parse tree produced by the `defaultPropertyValue`
     * labeled alternative in `TrinoSQLParser.propertyValue`.
     * @param ctx the parse tree
     */
    exitDefaultPropertyValue?: (ctx: DefaultPropertyValueContext) => void;
    /**
     * Enter a parse tree produced by the `nonDefaultPropertyValue`
     * labeled alternative in `TrinoSQLParser.propertyValue`.
     * @param ctx the parse tree
     */
    enterNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => void;
    /**
     * Exit a parse tree produced by the `nonDefaultPropertyValue`
     * labeled alternative in `TrinoSQLParser.propertyValue`.
     * @param ctx the parse tree
     */
    exitNonDefaultPropertyValue?: (ctx: NonDefaultPropertyValueContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.queryNoWith`.
     * @param ctx the parse tree
     */
    enterQueryNoWith?: (ctx: QueryNoWithContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.queryNoWith`.
     * @param ctx the parse tree
     */
    exitQueryNoWith?: (ctx: QueryNoWithContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.limitRowCount`.
     * @param ctx the parse tree
     */
    enterLimitRowCount?: (ctx: LimitRowCountContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.limitRowCount`.
     * @param ctx the parse tree
     */
    exitLimitRowCount?: (ctx: LimitRowCountContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.rowCount`.
     * @param ctx the parse tree
     */
    enterRowCount?: (ctx: RowCountContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.rowCount`.
     * @param ctx the parse tree
     */
    exitRowCount?: (ctx: RowCountContext) => void;
    /**
     * Enter a parse tree produced by the `queryTermDefault`
     * labeled alternative in `TrinoSQLParser.queryTerm`.
     * @param ctx the parse tree
     */
    enterQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `queryTermDefault`
     * labeled alternative in `TrinoSQLParser.queryTerm`.
     * @param ctx the parse tree
     */
    exitQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `setOperation`
     * labeled alternative in `TrinoSQLParser.queryTerm`.
     * @param ctx the parse tree
     */
    enterSetOperation?: (ctx: SetOperationContext) => void;
    /**
     * Exit a parse tree produced by the `setOperation`
     * labeled alternative in `TrinoSQLParser.queryTerm`.
     * @param ctx the parse tree
     */
    exitSetOperation?: (ctx: SetOperationContext) => void;
    /**
     * Enter a parse tree produced by the `queryPrimaryDefault`
     * labeled alternative in `TrinoSQLParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `queryPrimaryDefault`
     * labeled alternative in `TrinoSQLParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `table`
     * labeled alternative in `TrinoSQLParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterTable?: (ctx: TableContext) => void;
    /**
     * Exit a parse tree produced by the `table`
     * labeled alternative in `TrinoSQLParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitTable?: (ctx: TableContext) => void;
    /**
     * Enter a parse tree produced by the `inlineTable`
     * labeled alternative in `TrinoSQLParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterInlineTable?: (ctx: InlineTableContext) => void;
    /**
     * Exit a parse tree produced by the `inlineTable`
     * labeled alternative in `TrinoSQLParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitInlineTable?: (ctx: InlineTableContext) => void;
    /**
     * Enter a parse tree produced by the `subquery`
     * labeled alternative in `TrinoSQLParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterSubquery?: (ctx: SubqueryContext) => void;
    /**
     * Exit a parse tree produced by the `subquery`
     * labeled alternative in `TrinoSQLParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitSubquery?: (ctx: SubqueryContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.sortItem`.
     * @param ctx the parse tree
     */
    enterSortItem?: (ctx: SortItemContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.sortItem`.
     * @param ctx the parse tree
     */
    exitSortItem?: (ctx: SortItemContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.querySpecification`.
     * @param ctx the parse tree
     */
    enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.querySpecification`.
     * @param ctx the parse tree
     */
    exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.groupBy`.
     * @param ctx the parse tree
     */
    enterGroupBy?: (ctx: GroupByContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.groupBy`.
     * @param ctx the parse tree
     */
    exitGroupBy?: (ctx: GroupByContext) => void;
    /**
     * Enter a parse tree produced by the `singleGroupingSet`
     * labeled alternative in `TrinoSQLParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;
    /**
     * Exit a parse tree produced by the `singleGroupingSet`
     * labeled alternative in `TrinoSQLParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => void;
    /**
     * Enter a parse tree produced by the `rollup`
     * labeled alternative in `TrinoSQLParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterRollup?: (ctx: RollupContext) => void;
    /**
     * Exit a parse tree produced by the `rollup`
     * labeled alternative in `TrinoSQLParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitRollup?: (ctx: RollupContext) => void;
    /**
     * Enter a parse tree produced by the `cube`
     * labeled alternative in `TrinoSQLParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterCube?: (ctx: CubeContext) => void;
    /**
     * Exit a parse tree produced by the `cube`
     * labeled alternative in `TrinoSQLParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitCube?: (ctx: CubeContext) => void;
    /**
     * Enter a parse tree produced by the `multipleGroupingSets`
     * labeled alternative in `TrinoSQLParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => void;
    /**
     * Exit a parse tree produced by the `multipleGroupingSets`
     * labeled alternative in `TrinoSQLParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.groupingSet`.
     * @param ctx the parse tree
     */
    enterGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.groupingSet`.
     * @param ctx the parse tree
     */
    exitGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.windowDefinition`.
     * @param ctx the parse tree
     */
    enterWindowDefinition?: (ctx: WindowDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.windowDefinition`.
     * @param ctx the parse tree
     */
    exitWindowDefinition?: (ctx: WindowDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.windowSpecification`.
     * @param ctx the parse tree
     */
    enterWindowSpecification?: (ctx: WindowSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.windowSpecification`.
     * @param ctx the parse tree
     */
    exitWindowSpecification?: (ctx: WindowSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.namedQuery`.
     * @param ctx the parse tree
     */
    enterNamedQuery?: (ctx: NamedQueryContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.namedQuery`.
     * @param ctx the parse tree
     */
    exitNamedQuery?: (ctx: NamedQueryContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.setQuantifier`.
     * @param ctx the parse tree
     */
    enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.setQuantifier`.
     * @param ctx the parse tree
     */
    exitSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `selectSingle`
     * labeled alternative in `TrinoSQLParser.selectItem`.
     * @param ctx the parse tree
     */
    enterSelectSingle?: (ctx: SelectSingleContext) => void;
    /**
     * Exit a parse tree produced by the `selectSingle`
     * labeled alternative in `TrinoSQLParser.selectItem`.
     * @param ctx the parse tree
     */
    exitSelectSingle?: (ctx: SelectSingleContext) => void;
    /**
     * Enter a parse tree produced by the `selectAll`
     * labeled alternative in `TrinoSQLParser.selectItem`.
     * @param ctx the parse tree
     */
    enterSelectAll?: (ctx: SelectAllContext) => void;
    /**
     * Exit a parse tree produced by the `selectAll`
     * labeled alternative in `TrinoSQLParser.selectItem`.
     * @param ctx the parse tree
     */
    exitSelectAll?: (ctx: SelectAllContext) => void;
    /**
     * Enter a parse tree produced by the `relationDefault`
     * labeled alternative in `TrinoSQLParser.relation`.
     * @param ctx the parse tree
     */
    enterRelationDefault?: (ctx: RelationDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `relationDefault`
     * labeled alternative in `TrinoSQLParser.relation`.
     * @param ctx the parse tree
     */
    exitRelationDefault?: (ctx: RelationDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `joinRelation`
     * labeled alternative in `TrinoSQLParser.relation`.
     * @param ctx the parse tree
     */
    enterJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Exit a parse tree produced by the `joinRelation`
     * labeled alternative in `TrinoSQLParser.relation`.
     * @param ctx the parse tree
     */
    exitJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.joinType`.
     * @param ctx the parse tree
     */
    enterJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.joinType`.
     * @param ctx the parse tree
     */
    exitJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.joinCriteria`.
     * @param ctx the parse tree
     */
    enterJoinCriteria?: (ctx: JoinCriteriaContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.joinCriteria`.
     * @param ctx the parse tree
     */
    exitJoinCriteria?: (ctx: JoinCriteriaContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.sampledRelation`.
     * @param ctx the parse tree
     */
    enterSampledRelation?: (ctx: SampledRelationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.sampledRelation`.
     * @param ctx the parse tree
     */
    exitSampledRelation?: (ctx: SampledRelationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.sampleType`.
     * @param ctx the parse tree
     */
    enterSampleType?: (ctx: SampleTypeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.sampleType`.
     * @param ctx the parse tree
     */
    exitSampleType?: (ctx: SampleTypeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.trimsSpecification`.
     * @param ctx the parse tree
     */
    enterTrimsSpecification?: (ctx: TrimsSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.trimsSpecification`.
     * @param ctx the parse tree
     */
    exitTrimsSpecification?: (ctx: TrimsSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.listAggOverflowBehavior`.
     * @param ctx the parse tree
     */
    enterListAggOverflowBehavior?: (ctx: ListAggOverflowBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.listAggOverflowBehavior`.
     * @param ctx the parse tree
     */
    exitListAggOverflowBehavior?: (ctx: ListAggOverflowBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.listaggCountIndication`.
     * @param ctx the parse tree
     */
    enterListaggCountIndication?: (ctx: ListaggCountIndicationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.listaggCountIndication`.
     * @param ctx the parse tree
     */
    exitListaggCountIndication?: (ctx: ListaggCountIndicationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.patternRecognition`.
     * @param ctx the parse tree
     */
    enterPatternRecognition?: (ctx: PatternRecognitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.patternRecognition`.
     * @param ctx the parse tree
     */
    exitPatternRecognition?: (ctx: PatternRecognitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.measureDefinition`.
     * @param ctx the parse tree
     */
    enterMeasureDefinition?: (ctx: MeasureDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.measureDefinition`.
     * @param ctx the parse tree
     */
    exitMeasureDefinition?: (ctx: MeasureDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.rowsPerMatch`.
     * @param ctx the parse tree
     */
    enterRowsPerMatch?: (ctx: RowsPerMatchContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.rowsPerMatch`.
     * @param ctx the parse tree
     */
    exitRowsPerMatch?: (ctx: RowsPerMatchContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.emptyMatchHandling`.
     * @param ctx the parse tree
     */
    enterEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.emptyMatchHandling`.
     * @param ctx the parse tree
     */
    exitEmptyMatchHandling?: (ctx: EmptyMatchHandlingContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.skipTo`.
     * @param ctx the parse tree
     */
    enterSkipTo?: (ctx: SkipToContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.skipTo`.
     * @param ctx the parse tree
     */
    exitSkipTo?: (ctx: SkipToContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.subsetDefinition`.
     * @param ctx the parse tree
     */
    enterSubsetDefinition?: (ctx: SubsetDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.subsetDefinition`.
     * @param ctx the parse tree
     */
    exitSubsetDefinition?: (ctx: SubsetDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.variableDefinition`.
     * @param ctx the parse tree
     */
    enterVariableDefinition?: (ctx: VariableDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.variableDefinition`.
     * @param ctx the parse tree
     */
    exitVariableDefinition?: (ctx: VariableDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.aliasedRelation`.
     * @param ctx the parse tree
     */
    enterAliasedRelation?: (ctx: AliasedRelationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.aliasedRelation`.
     * @param ctx the parse tree
     */
    exitAliasedRelation?: (ctx: AliasedRelationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.columnAliases`.
     * @param ctx the parse tree
     */
    enterColumnAliases?: (ctx: ColumnAliasesContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.columnAliases`.
     * @param ctx the parse tree
     */
    exitColumnAliases?: (ctx: ColumnAliasesContext) => void;
    /**
     * Enter a parse tree produced by the `tableName`
     * labeled alternative in `TrinoSQLParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterTableName?: (ctx: TableNameContext) => void;
    /**
     * Exit a parse tree produced by the `tableName`
     * labeled alternative in `TrinoSQLParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitTableName?: (ctx: TableNameContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryRelation`
     * labeled alternative in `TrinoSQLParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterSubqueryRelation?: (ctx: SubqueryRelationContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryRelation`
     * labeled alternative in `TrinoSQLParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitSubqueryRelation?: (ctx: SubqueryRelationContext) => void;
    /**
     * Enter a parse tree produced by the `unnest`
     * labeled alternative in `TrinoSQLParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterUnnest?: (ctx: UnnestContext) => void;
    /**
     * Exit a parse tree produced by the `unnest`
     * labeled alternative in `TrinoSQLParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitUnnest?: (ctx: UnnestContext) => void;
    /**
     * Enter a parse tree produced by the `lateral`
     * labeled alternative in `TrinoSQLParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterLateral?: (ctx: LateralContext) => void;
    /**
     * Exit a parse tree produced by the `lateral`
     * labeled alternative in `TrinoSQLParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitLateral?: (ctx: LateralContext) => void;
    /**
     * Enter a parse tree produced by the `tableFunctionInvocation`
     * labeled alternative in `TrinoSQLParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterTableFunctionInvocation?: (ctx: TableFunctionInvocationContext) => void;
    /**
     * Exit a parse tree produced by the `tableFunctionInvocation`
     * labeled alternative in `TrinoSQLParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitTableFunctionInvocation?: (ctx: TableFunctionInvocationContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesizedRelation`
     * labeled alternative in `TrinoSQLParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesizedRelation`
     * labeled alternative in `TrinoSQLParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => void;
    /**
     * Enter a parse tree produced by the `jsonTable`
     * labeled alternative in `TrinoSQLParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterJsonTable?: (ctx: JsonTableContext) => void;
    /**
     * Exit a parse tree produced by the `jsonTable`
     * labeled alternative in `TrinoSQLParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitJsonTable?: (ctx: JsonTableContext) => void;
    /**
     * Enter a parse tree produced by the `ordinalityColumn`
     * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
     * @param ctx the parse tree
     */
    enterOrdinalityColumn?: (ctx: OrdinalityColumnContext) => void;
    /**
     * Exit a parse tree produced by the `ordinalityColumn`
     * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
     * @param ctx the parse tree
     */
    exitOrdinalityColumn?: (ctx: OrdinalityColumnContext) => void;
    /**
     * Enter a parse tree produced by the `valueColumn`
     * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
     * @param ctx the parse tree
     */
    enterValueColumn?: (ctx: ValueColumnContext) => void;
    /**
     * Exit a parse tree produced by the `valueColumn`
     * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
     * @param ctx the parse tree
     */
    exitValueColumn?: (ctx: ValueColumnContext) => void;
    /**
     * Enter a parse tree produced by the `queryColumn`
     * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
     * @param ctx the parse tree
     */
    enterQueryColumn?: (ctx: QueryColumnContext) => void;
    /**
     * Exit a parse tree produced by the `queryColumn`
     * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
     * @param ctx the parse tree
     */
    exitQueryColumn?: (ctx: QueryColumnContext) => void;
    /**
     * Enter a parse tree produced by the `nestedColumns`
     * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
     * @param ctx the parse tree
     */
    enterNestedColumns?: (ctx: NestedColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `nestedColumns`
     * labeled alternative in `TrinoSQLParser.jsonTableColumn`.
     * @param ctx the parse tree
     */
    exitNestedColumns?: (ctx: NestedColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `leafPlan`
     * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
     * @param ctx the parse tree
     */
    enterLeafPlan?: (ctx: LeafPlanContext) => void;
    /**
     * Exit a parse tree produced by the `leafPlan`
     * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
     * @param ctx the parse tree
     */
    exitLeafPlan?: (ctx: LeafPlanContext) => void;
    /**
     * Enter a parse tree produced by the `joinPlan`
     * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
     * @param ctx the parse tree
     */
    enterJoinPlan?: (ctx: JoinPlanContext) => void;
    /**
     * Exit a parse tree produced by the `joinPlan`
     * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
     * @param ctx the parse tree
     */
    exitJoinPlan?: (ctx: JoinPlanContext) => void;
    /**
     * Enter a parse tree produced by the `unionPlan`
     * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
     * @param ctx the parse tree
     */
    enterUnionPlan?: (ctx: UnionPlanContext) => void;
    /**
     * Exit a parse tree produced by the `unionPlan`
     * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
     * @param ctx the parse tree
     */
    exitUnionPlan?: (ctx: UnionPlanContext) => void;
    /**
     * Enter a parse tree produced by the `crossPlan`
     * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
     * @param ctx the parse tree
     */
    enterCrossPlan?: (ctx: CrossPlanContext) => void;
    /**
     * Exit a parse tree produced by the `crossPlan`
     * labeled alternative in `TrinoSQLParser.jsonTableSpecificPlan`.
     * @param ctx the parse tree
     */
    exitCrossPlan?: (ctx: CrossPlanContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.jsonTablePathName`.
     * @param ctx the parse tree
     */
    enterJsonTablePathName?: (ctx: JsonTablePathNameContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.jsonTablePathName`.
     * @param ctx the parse tree
     */
    exitJsonTablePathName?: (ctx: JsonTablePathNameContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.planPrimary`.
     * @param ctx the parse tree
     */
    enterPlanPrimary?: (ctx: PlanPrimaryContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.planPrimary`.
     * @param ctx the parse tree
     */
    exitPlanPrimary?: (ctx: PlanPrimaryContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.jsonTableDefaultPlan`.
     * @param ctx the parse tree
     */
    enterJsonTableDefaultPlan?: (ctx: JsonTableDefaultPlanContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.jsonTableDefaultPlan`.
     * @param ctx the parse tree
     */
    exitJsonTableDefaultPlan?: (ctx: JsonTableDefaultPlanContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.tableFunctionCall`.
     * @param ctx the parse tree
     */
    enterTableFunctionCall?: (ctx: TableFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.tableFunctionCall`.
     * @param ctx the parse tree
     */
    exitTableFunctionCall?: (ctx: TableFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.tableFunctionArgument`.
     * @param ctx the parse tree
     */
    enterTableFunctionArgument?: (ctx: TableFunctionArgumentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.tableFunctionArgument`.
     * @param ctx the parse tree
     */
    exitTableFunctionArgument?: (ctx: TableFunctionArgumentContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.tableArgument`.
     * @param ctx the parse tree
     */
    enterTableArgument?: (ctx: TableArgumentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.tableArgument`.
     * @param ctx the parse tree
     */
    exitTableArgument?: (ctx: TableArgumentContext) => void;
    /**
     * Enter a parse tree produced by the `tableArgumentTable`
     * labeled alternative in `TrinoSQLParser.tableArgumentRelation`.
     * @param ctx the parse tree
     */
    enterTableArgumentTable?: (ctx: TableArgumentTableContext) => void;
    /**
     * Exit a parse tree produced by the `tableArgumentTable`
     * labeled alternative in `TrinoSQLParser.tableArgumentRelation`.
     * @param ctx the parse tree
     */
    exitTableArgumentTable?: (ctx: TableArgumentTableContext) => void;
    /**
     * Enter a parse tree produced by the `tableArgumentQuery`
     * labeled alternative in `TrinoSQLParser.tableArgumentRelation`.
     * @param ctx the parse tree
     */
    enterTableArgumentQuery?: (ctx: TableArgumentQueryContext) => void;
    /**
     * Exit a parse tree produced by the `tableArgumentQuery`
     * labeled alternative in `TrinoSQLParser.tableArgumentRelation`.
     * @param ctx the parse tree
     */
    exitTableArgumentQuery?: (ctx: TableArgumentQueryContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.descriptorArgument`.
     * @param ctx the parse tree
     */
    enterDescriptorArgument?: (ctx: DescriptorArgumentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.descriptorArgument`.
     * @param ctx the parse tree
     */
    exitDescriptorArgument?: (ctx: DescriptorArgumentContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.descriptorField`.
     * @param ctx the parse tree
     */
    enterDescriptorField?: (ctx: DescriptorFieldContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.descriptorField`.
     * @param ctx the parse tree
     */
    exitDescriptorField?: (ctx: DescriptorFieldContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.copartitionTables`.
     * @param ctx the parse tree
     */
    enterCopartitionTables?: (ctx: CopartitionTablesContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.copartitionTables`.
     * @param ctx the parse tree
     */
    exitCopartitionTables?: (ctx: CopartitionTablesContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `logicalNot`
     * labeled alternative in `TrinoSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Exit a parse tree produced by the `logicalNot`
     * labeled alternative in `TrinoSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Enter a parse tree produced by the `predicated`
     * labeled alternative in `TrinoSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Exit a parse tree produced by the `predicated`
     * labeled alternative in `TrinoSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Enter a parse tree produced by the `or`
     * labeled alternative in `TrinoSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterOr?: (ctx: OrContext) => void;
    /**
     * Exit a parse tree produced by the `or`
     * labeled alternative in `TrinoSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitOr?: (ctx: OrContext) => void;
    /**
     * Enter a parse tree produced by the `and`
     * labeled alternative in `TrinoSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterAnd?: (ctx: AndContext) => void;
    /**
     * Exit a parse tree produced by the `and`
     * labeled alternative in `TrinoSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitAnd?: (ctx: AndContext) => void;
    /**
     * Enter a parse tree produced by the `comparison`
     * labeled alternative in `TrinoSQLParser.predicate`.
     * @param ctx the parse tree
     */
    enterComparison?: (ctx: ComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `comparison`
     * labeled alternative in `TrinoSQLParser.predicate`.
     * @param ctx the parse tree
     */
    exitComparison?: (ctx: ComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `quantifiedComparison`
     * labeled alternative in `TrinoSQLParser.predicate`.
     * @param ctx the parse tree
     */
    enterQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `quantifiedComparison`
     * labeled alternative in `TrinoSQLParser.predicate`.
     * @param ctx the parse tree
     */
    exitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `between`
     * labeled alternative in `TrinoSQLParser.predicate`.
     * @param ctx the parse tree
     */
    enterBetween?: (ctx: BetweenContext) => void;
    /**
     * Exit a parse tree produced by the `between`
     * labeled alternative in `TrinoSQLParser.predicate`.
     * @param ctx the parse tree
     */
    exitBetween?: (ctx: BetweenContext) => void;
    /**
     * Enter a parse tree produced by the `inList`
     * labeled alternative in `TrinoSQLParser.predicate`.
     * @param ctx the parse tree
     */
    enterInList?: (ctx: InListContext) => void;
    /**
     * Exit a parse tree produced by the `inList`
     * labeled alternative in `TrinoSQLParser.predicate`.
     * @param ctx the parse tree
     */
    exitInList?: (ctx: InListContext) => void;
    /**
     * Enter a parse tree produced by the `inSubquery`
     * labeled alternative in `TrinoSQLParser.predicate`.
     * @param ctx the parse tree
     */
    enterInSubquery?: (ctx: InSubqueryContext) => void;
    /**
     * Exit a parse tree produced by the `inSubquery`
     * labeled alternative in `TrinoSQLParser.predicate`.
     * @param ctx the parse tree
     */
    exitInSubquery?: (ctx: InSubqueryContext) => void;
    /**
     * Enter a parse tree produced by the `like`
     * labeled alternative in `TrinoSQLParser.predicate`.
     * @param ctx the parse tree
     */
    enterLike?: (ctx: LikeContext) => void;
    /**
     * Exit a parse tree produced by the `like`
     * labeled alternative in `TrinoSQLParser.predicate`.
     * @param ctx the parse tree
     */
    exitLike?: (ctx: LikeContext) => void;
    /**
     * Enter a parse tree produced by the `nullPredicate`
     * labeled alternative in `TrinoSQLParser.predicate`.
     * @param ctx the parse tree
     */
    enterNullPredicate?: (ctx: NullPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `nullPredicate`
     * labeled alternative in `TrinoSQLParser.predicate`.
     * @param ctx the parse tree
     */
    exitNullPredicate?: (ctx: NullPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `distinctFrom`
     * labeled alternative in `TrinoSQLParser.predicate`.
     * @param ctx the parse tree
     */
    enterDistinctFrom?: (ctx: DistinctFromContext) => void;
    /**
     * Exit a parse tree produced by the `distinctFrom`
     * labeled alternative in `TrinoSQLParser.predicate`.
     * @param ctx the parse tree
     */
    exitDistinctFrom?: (ctx: DistinctFromContext) => void;
    /**
     * Enter a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `TrinoSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `TrinoSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `concatenation`
     * labeled alternative in `TrinoSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterConcatenation?: (ctx: ConcatenationContext) => void;
    /**
     * Exit a parse tree produced by the `concatenation`
     * labeled alternative in `TrinoSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitConcatenation?: (ctx: ConcatenationContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `TrinoSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `TrinoSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `TrinoSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `TrinoSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Enter a parse tree produced by the `atTimeZone`
     * labeled alternative in `TrinoSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterAtTimeZone?: (ctx: AtTimeZoneContext) => void;
    /**
     * Exit a parse tree produced by the `atTimeZone`
     * labeled alternative in `TrinoSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitAtTimeZone?: (ctx: AtTimeZoneContext) => void;
    /**
     * Enter a parse tree produced by the `dereference`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDereference?: (ctx: DereferenceContext) => void;
    /**
     * Exit a parse tree produced by the `dereference`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDereference?: (ctx: DereferenceContext) => void;
    /**
     * Enter a parse tree produced by the `typeConstructor`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterTypeConstructor?: (ctx: TypeConstructorContext) => void;
    /**
     * Exit a parse tree produced by the `typeConstructor`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitTypeConstructor?: (ctx: TypeConstructorContext) => void;
    /**
     * Enter a parse tree produced by the `jsonValue`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterJsonValue?: (ctx: JsonValueContext) => void;
    /**
     * Exit a parse tree produced by the `jsonValue`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitJsonValue?: (ctx: JsonValueContext) => void;
    /**
     * Enter a parse tree produced by the `currentDate`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentDate?: (ctx: CurrentDateContext) => void;
    /**
     * Exit a parse tree produced by the `currentDate`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentDate?: (ctx: CurrentDateContext) => void;
    /**
     * Enter a parse tree produced by the `substring`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubstring?: (ctx: SubstringContext) => void;
    /**
     * Exit a parse tree produced by the `substring`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubstring?: (ctx: SubstringContext) => void;
    /**
     * Enter a parse tree produced by the `cast`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCast?: (ctx: CastContext) => void;
    /**
     * Exit a parse tree produced by the `cast`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCast?: (ctx: CastContext) => void;
    /**
     * Enter a parse tree produced by the `lambda`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterLambda?: (ctx: LambdaContext) => void;
    /**
     * Exit a parse tree produced by the `lambda`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitLambda?: (ctx: LambdaContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `trim`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterTrim?: (ctx: TrimContext) => void;
    /**
     * Exit a parse tree produced by the `trim`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitTrim?: (ctx: TrimContext) => void;
    /**
     * Enter a parse tree produced by the `parameter`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterParameter?: (ctx: ParameterContext) => void;
    /**
     * Exit a parse tree produced by the `parameter`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitParameter?: (ctx: ParameterContext) => void;
    /**
     * Enter a parse tree produced by the `normalize`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterNormalize?: (ctx: NormalizeContext) => void;
    /**
     * Exit a parse tree produced by the `normalize`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitNormalize?: (ctx: NormalizeContext) => void;
    /**
     * Enter a parse tree produced by the `localTimestamp`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterLocalTimestamp?: (ctx: LocalTimestampContext) => void;
    /**
     * Exit a parse tree produced by the `localTimestamp`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitLocalTimestamp?: (ctx: LocalTimestampContext) => void;
    /**
     * Enter a parse tree produced by the `jsonObject`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterJsonObject?: (ctx: JsonObjectContext) => void;
    /**
     * Exit a parse tree produced by the `jsonObject`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitJsonObject?: (ctx: JsonObjectContext) => void;
    /**
     * Enter a parse tree produced by the `intervalLiteral`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `intervalLiteral`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `numericLiteral`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `numericLiteral`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitNumericLiteral?: (ctx: NumericLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `booleanLiteral`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `booleanLiteral`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `jsonArray`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterJsonArray?: (ctx: JsonArrayContext) => void;
    /**
     * Exit a parse tree produced by the `jsonArray`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitJsonArray?: (ctx: JsonArrayContext) => void;
    /**
     * Enter a parse tree produced by the `simpleCase`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSimpleCase?: (ctx: SimpleCaseContext) => void;
    /**
     * Exit a parse tree produced by the `simpleCase`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSimpleCase?: (ctx: SimpleCaseContext) => void;
    /**
     * Enter a parse tree produced by the `columnReference`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterColumnReference?: (ctx: ColumnReferenceContext) => void;
    /**
     * Exit a parse tree produced by the `columnReference`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitColumnReference?: (ctx: ColumnReferenceContext) => void;
    /**
     * Enter a parse tree produced by the `nullLiteral`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `nullLiteral`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `rowConstructor`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterRowConstructor?: (ctx: RowConstructorContext) => void;
    /**
     * Exit a parse tree produced by the `rowConstructor`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitRowConstructor?: (ctx: RowConstructorContext) => void;
    /**
     * Enter a parse tree produced by the `subscript`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubscript?: (ctx: SubscriptContext) => void;
    /**
     * Exit a parse tree produced by the `subscript`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubscript?: (ctx: SubscriptContext) => void;
    /**
     * Enter a parse tree produced by the `jsonExists`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterJsonExists?: (ctx: JsonExistsContext) => void;
    /**
     * Exit a parse tree produced by the `jsonExists`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitJsonExists?: (ctx: JsonExistsContext) => void;
    /**
     * Enter a parse tree produced by the `currentPath`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentPath?: (ctx: CurrentPathContext) => void;
    /**
     * Exit a parse tree produced by the `currentPath`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentPath?: (ctx: CurrentPathContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryExpression`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryExpression`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `binaryLiteral`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterBinaryLiteral?: (ctx: BinaryLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `binaryLiteral`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitBinaryLiteral?: (ctx: BinaryLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `currentTime`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentTime?: (ctx: CurrentTimeContext) => void;
    /**
     * Exit a parse tree produced by the `currentTime`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentTime?: (ctx: CurrentTimeContext) => void;
    /**
     * Enter a parse tree produced by the `localTime`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterLocalTime?: (ctx: LocalTimeContext) => void;
    /**
     * Exit a parse tree produced by the `localTime`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitLocalTime?: (ctx: LocalTimeContext) => void;
    /**
     * Enter a parse tree produced by the `currentUser`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentUser?: (ctx: CurrentUserContext) => void;
    /**
     * Exit a parse tree produced by the `currentUser`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentUser?: (ctx: CurrentUserContext) => void;
    /**
     * Enter a parse tree produced by the `jsonQuery`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterJsonQuery?: (ctx: JsonQueryContext) => void;
    /**
     * Exit a parse tree produced by the `jsonQuery`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitJsonQuery?: (ctx: JsonQueryContext) => void;
    /**
     * Enter a parse tree produced by the `measure`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterMeasure?: (ctx: MeasureContext) => void;
    /**
     * Exit a parse tree produced by the `measure`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitMeasure?: (ctx: MeasureContext) => void;
    /**
     * Enter a parse tree produced by the `extract`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterExtract?: (ctx: ExtractContext) => void;
    /**
     * Exit a parse tree produced by the `extract`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitExtract?: (ctx: ExtractContext) => void;
    /**
     * Enter a parse tree produced by the `stringLiteral`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `stringLiteral`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `arrayConstructor`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterArrayConstructor?: (ctx: ArrayConstructorContext) => void;
    /**
     * Exit a parse tree produced by the `arrayConstructor`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitArrayConstructor?: (ctx: ArrayConstructorContext) => void;
    /**
     * Enter a parse tree produced by the `functionCall`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `functionCall`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `currentTimestamp`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentTimestamp?: (ctx: CurrentTimestampContext) => void;
    /**
     * Exit a parse tree produced by the `currentTimestamp`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentTimestamp?: (ctx: CurrentTimestampContext) => void;
    /**
     * Enter a parse tree produced by the `currentSchema`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentSchema?: (ctx: CurrentSchemaContext) => void;
    /**
     * Exit a parse tree produced by the `currentSchema`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentSchema?: (ctx: CurrentSchemaContext) => void;
    /**
     * Enter a parse tree produced by the `exists`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterExists?: (ctx: ExistsContext) => void;
    /**
     * Exit a parse tree produced by the `exists`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitExists?: (ctx: ExistsContext) => void;
    /**
     * Enter a parse tree produced by the `position`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterPosition?: (ctx: PositionContext) => void;
    /**
     * Exit a parse tree produced by the `position`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitPosition?: (ctx: PositionContext) => void;
    /**
     * Enter a parse tree produced by the `listagg`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterListagg?: (ctx: ListaggContext) => void;
    /**
     * Exit a parse tree produced by the `listagg`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitListagg?: (ctx: ListaggContext) => void;
    /**
     * Enter a parse tree produced by the `searchedCase`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSearchedCase?: (ctx: SearchedCaseContext) => void;
    /**
     * Exit a parse tree produced by the `searchedCase`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSearchedCase?: (ctx: SearchedCaseContext) => void;
    /**
     * Enter a parse tree produced by the `currentCatalog`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentCatalog?: (ctx: CurrentCatalogContext) => void;
    /**
     * Exit a parse tree produced by the `currentCatalog`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentCatalog?: (ctx: CurrentCatalogContext) => void;
    /**
     * Enter a parse tree produced by the `groupingOperation`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterGroupingOperation?: (ctx: GroupingOperationContext) => void;
    /**
     * Exit a parse tree produced by the `groupingOperation`
     * labeled alternative in `TrinoSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitGroupingOperation?: (ctx: GroupingOperationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.jsonPathInvocation`.
     * @param ctx the parse tree
     */
    enterJsonPathInvocation?: (ctx: JsonPathInvocationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.jsonPathInvocation`.
     * @param ctx the parse tree
     */
    exitJsonPathInvocation?: (ctx: JsonPathInvocationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.jsonValueExpression`.
     * @param ctx the parse tree
     */
    enterJsonValueExpression?: (ctx: JsonValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.jsonValueExpression`.
     * @param ctx the parse tree
     */
    exitJsonValueExpression?: (ctx: JsonValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.jsonRepresentation`.
     * @param ctx the parse tree
     */
    enterJsonRepresentation?: (ctx: JsonRepresentationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.jsonRepresentation`.
     * @param ctx the parse tree
     */
    exitJsonRepresentation?: (ctx: JsonRepresentationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.jsonArgument`.
     * @param ctx the parse tree
     */
    enterJsonArgument?: (ctx: JsonArgumentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.jsonArgument`.
     * @param ctx the parse tree
     */
    exitJsonArgument?: (ctx: JsonArgumentContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.jsonExistsErrorBehavior`.
     * @param ctx the parse tree
     */
    enterJsonExistsErrorBehavior?: (ctx: JsonExistsErrorBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.jsonExistsErrorBehavior`.
     * @param ctx the parse tree
     */
    exitJsonExistsErrorBehavior?: (ctx: JsonExistsErrorBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.jsonValueBehavior`.
     * @param ctx the parse tree
     */
    enterJsonValueBehavior?: (ctx: JsonValueBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.jsonValueBehavior`.
     * @param ctx the parse tree
     */
    exitJsonValueBehavior?: (ctx: JsonValueBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.jsonQueryWrapperBehavior`.
     * @param ctx the parse tree
     */
    enterJsonQueryWrapperBehavior?: (ctx: JsonQueryWrapperBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.jsonQueryWrapperBehavior`.
     * @param ctx the parse tree
     */
    exitJsonQueryWrapperBehavior?: (ctx: JsonQueryWrapperBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.jsonQueryBehavior`.
     * @param ctx the parse tree
     */
    enterJsonQueryBehavior?: (ctx: JsonQueryBehaviorContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.jsonQueryBehavior`.
     * @param ctx the parse tree
     */
    exitJsonQueryBehavior?: (ctx: JsonQueryBehaviorContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.jsonObjectMember`.
     * @param ctx the parse tree
     */
    enterJsonObjectMember?: (ctx: JsonObjectMemberContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.jsonObjectMember`.
     * @param ctx the parse tree
     */
    exitJsonObjectMember?: (ctx: JsonObjectMemberContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.processingMode`.
     * @param ctx the parse tree
     */
    enterProcessingMode?: (ctx: ProcessingModeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.processingMode`.
     * @param ctx the parse tree
     */
    exitProcessingMode?: (ctx: ProcessingModeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.nullTreatment`.
     * @param ctx the parse tree
     */
    enterNullTreatment?: (ctx: NullTreatmentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.nullTreatment`.
     * @param ctx the parse tree
     */
    exitNullTreatment?: (ctx: NullTreatmentContext) => void;
    /**
     * Enter a parse tree produced by the `basicStringLiteral`
     * labeled alternative in `TrinoSQLParser.string`.
     * @param ctx the parse tree
     */
    enterBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `basicStringLiteral`
     * labeled alternative in `TrinoSQLParser.string`.
     * @param ctx the parse tree
     */
    exitBasicStringLiteral?: (ctx: BasicStringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `unicodeStringLiteral`
     * labeled alternative in `TrinoSQLParser.string`.
     * @param ctx the parse tree
     */
    enterUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `unicodeStringLiteral`
     * labeled alternative in `TrinoSQLParser.string`.
     * @param ctx the parse tree
     */
    exitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `timeZoneInterval`
     * labeled alternative in `TrinoSQLParser.timeZoneSpecifier`.
     * @param ctx the parse tree
     */
    enterTimeZoneInterval?: (ctx: TimeZoneIntervalContext) => void;
    /**
     * Exit a parse tree produced by the `timeZoneInterval`
     * labeled alternative in `TrinoSQLParser.timeZoneSpecifier`.
     * @param ctx the parse tree
     */
    exitTimeZoneInterval?: (ctx: TimeZoneIntervalContext) => void;
    /**
     * Enter a parse tree produced by the `timeZoneString`
     * labeled alternative in `TrinoSQLParser.timeZoneSpecifier`.
     * @param ctx the parse tree
     */
    enterTimeZoneString?: (ctx: TimeZoneStringContext) => void;
    /**
     * Exit a parse tree produced by the `timeZoneString`
     * labeled alternative in `TrinoSQLParser.timeZoneSpecifier`.
     * @param ctx the parse tree
     */
    exitTimeZoneString?: (ctx: TimeZoneStringContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.comparisonQuantifier`.
     * @param ctx the parse tree
     */
    enterComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.comparisonQuantifier`.
     * @param ctx the parse tree
     */
    exitComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.booleanValue`.
     * @param ctx the parse tree
     */
    enterBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.booleanValue`.
     * @param ctx the parse tree
     */
    exitBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.interval`.
     * @param ctx the parse tree
     */
    enterInterval?: (ctx: IntervalContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.interval`.
     * @param ctx the parse tree
     */
    exitInterval?: (ctx: IntervalContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.intervalField`.
     * @param ctx the parse tree
     */
    enterIntervalField?: (ctx: IntervalFieldContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.intervalField`.
     * @param ctx the parse tree
     */
    exitIntervalField?: (ctx: IntervalFieldContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.normalForm`.
     * @param ctx the parse tree
     */
    enterNormalForm?: (ctx: NormalFormContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.normalForm`.
     * @param ctx the parse tree
     */
    exitNormalForm?: (ctx: NormalFormContext) => void;
    /**
     * Enter a parse tree produced by the `rowType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     */
    enterRowType?: (ctx: RowTypeContext) => void;
    /**
     * Exit a parse tree produced by the `rowType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     */
    exitRowType?: (ctx: RowTypeContext) => void;
    /**
     * Enter a parse tree produced by the `intervalType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     */
    enterIntervalType?: (ctx: IntervalTypeContext) => void;
    /**
     * Exit a parse tree produced by the `intervalType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     */
    exitIntervalType?: (ctx: IntervalTypeContext) => void;
    /**
     * Enter a parse tree produced by the `arrayType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     */
    enterArrayType?: (ctx: ArrayTypeContext) => void;
    /**
     * Exit a parse tree produced by the `arrayType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     */
    exitArrayType?: (ctx: ArrayTypeContext) => void;
    /**
     * Enter a parse tree produced by the `doublePrecisionType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     */
    enterDoublePrecisionType?: (ctx: DoublePrecisionTypeContext) => void;
    /**
     * Exit a parse tree produced by the `doublePrecisionType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     */
    exitDoublePrecisionType?: (ctx: DoublePrecisionTypeContext) => void;
    /**
     * Enter a parse tree produced by the `legacyArrayType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     */
    enterLegacyArrayType?: (ctx: LegacyArrayTypeContext) => void;
    /**
     * Exit a parse tree produced by the `legacyArrayType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     */
    exitLegacyArrayType?: (ctx: LegacyArrayTypeContext) => void;
    /**
     * Enter a parse tree produced by the `genericType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     */
    enterGenericType?: (ctx: GenericTypeContext) => void;
    /**
     * Exit a parse tree produced by the `genericType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     */
    exitGenericType?: (ctx: GenericTypeContext) => void;
    /**
     * Enter a parse tree produced by the `dateTimeType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     */
    enterDateTimeType?: (ctx: DateTimeTypeContext) => void;
    /**
     * Exit a parse tree produced by the `dateTimeType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     */
    exitDateTimeType?: (ctx: DateTimeTypeContext) => void;
    /**
     * Enter a parse tree produced by the `legacyMapType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     */
    enterLegacyMapType?: (ctx: LegacyMapTypeContext) => void;
    /**
     * Exit a parse tree produced by the `legacyMapType`
     * labeled alternative in `TrinoSQLParser.type`.
     * @param ctx the parse tree
     */
    exitLegacyMapType?: (ctx: LegacyMapTypeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.rowField`.
     * @param ctx the parse tree
     */
    enterRowField?: (ctx: RowFieldContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.rowField`.
     * @param ctx the parse tree
     */
    exitRowField?: (ctx: RowFieldContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.typeParameter`.
     * @param ctx the parse tree
     */
    enterTypeParameter?: (ctx: TypeParameterContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.typeParameter`.
     * @param ctx the parse tree
     */
    exitTypeParameter?: (ctx: TypeParameterContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.whenClause`.
     * @param ctx the parse tree
     */
    enterWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.whenClause`.
     * @param ctx the parse tree
     */
    exitWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.filter`.
     * @param ctx the parse tree
     */
    enterFilter?: (ctx: FilterContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.filter`.
     * @param ctx the parse tree
     */
    exitFilter?: (ctx: FilterContext) => void;
    /**
     * Enter a parse tree produced by the `mergeUpdate`
     * labeled alternative in `TrinoSQLParser.mergeCase`.
     * @param ctx the parse tree
     */
    enterMergeUpdate?: (ctx: MergeUpdateContext) => void;
    /**
     * Exit a parse tree produced by the `mergeUpdate`
     * labeled alternative in `TrinoSQLParser.mergeCase`.
     * @param ctx the parse tree
     */
    exitMergeUpdate?: (ctx: MergeUpdateContext) => void;
    /**
     * Enter a parse tree produced by the `mergeDelete`
     * labeled alternative in `TrinoSQLParser.mergeCase`.
     * @param ctx the parse tree
     */
    enterMergeDelete?: (ctx: MergeDeleteContext) => void;
    /**
     * Exit a parse tree produced by the `mergeDelete`
     * labeled alternative in `TrinoSQLParser.mergeCase`.
     * @param ctx the parse tree
     */
    exitMergeDelete?: (ctx: MergeDeleteContext) => void;
    /**
     * Enter a parse tree produced by the `mergeInsert`
     * labeled alternative in `TrinoSQLParser.mergeCase`.
     * @param ctx the parse tree
     */
    enterMergeInsert?: (ctx: MergeInsertContext) => void;
    /**
     * Exit a parse tree produced by the `mergeInsert`
     * labeled alternative in `TrinoSQLParser.mergeCase`.
     * @param ctx the parse tree
     */
    exitMergeInsert?: (ctx: MergeInsertContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.over`.
     * @param ctx the parse tree
     */
    enterOver?: (ctx: OverContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.over`.
     * @param ctx the parse tree
     */
    exitOver?: (ctx: OverContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.windowFrame`.
     * @param ctx the parse tree
     */
    enterWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.windowFrame`.
     * @param ctx the parse tree
     */
    exitWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.frameExtent`.
     * @param ctx the parse tree
     */
    enterFrameExtent?: (ctx: FrameExtentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.frameExtent`.
     * @param ctx the parse tree
     */
    exitFrameExtent?: (ctx: FrameExtentContext) => void;
    /**
     * Enter a parse tree produced by the `unboundedFrame`
     * labeled alternative in `TrinoSQLParser.frameBound`.
     * @param ctx the parse tree
     */
    enterUnboundedFrame?: (ctx: UnboundedFrameContext) => void;
    /**
     * Exit a parse tree produced by the `unboundedFrame`
     * labeled alternative in `TrinoSQLParser.frameBound`.
     * @param ctx the parse tree
     */
    exitUnboundedFrame?: (ctx: UnboundedFrameContext) => void;
    /**
     * Enter a parse tree produced by the `currentRowBound`
     * labeled alternative in `TrinoSQLParser.frameBound`.
     * @param ctx the parse tree
     */
    enterCurrentRowBound?: (ctx: CurrentRowBoundContext) => void;
    /**
     * Exit a parse tree produced by the `currentRowBound`
     * labeled alternative in `TrinoSQLParser.frameBound`.
     * @param ctx the parse tree
     */
    exitCurrentRowBound?: (ctx: CurrentRowBoundContext) => void;
    /**
     * Enter a parse tree produced by the `boundedFrame`
     * labeled alternative in `TrinoSQLParser.frameBound`.
     * @param ctx the parse tree
     */
    enterBoundedFrame?: (ctx: BoundedFrameContext) => void;
    /**
     * Exit a parse tree produced by the `boundedFrame`
     * labeled alternative in `TrinoSQLParser.frameBound`.
     * @param ctx the parse tree
     */
    exitBoundedFrame?: (ctx: BoundedFrameContext) => void;
    /**
     * Enter a parse tree produced by the `quantifiedPrimary`
     * labeled alternative in `TrinoSQLParser.rowPattern`.
     * @param ctx the parse tree
     */
    enterQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => void;
    /**
     * Exit a parse tree produced by the `quantifiedPrimary`
     * labeled alternative in `TrinoSQLParser.rowPattern`.
     * @param ctx the parse tree
     */
    exitQuantifiedPrimary?: (ctx: QuantifiedPrimaryContext) => void;
    /**
     * Enter a parse tree produced by the `patternConcatenation`
     * labeled alternative in `TrinoSQLParser.rowPattern`.
     * @param ctx the parse tree
     */
    enterPatternConcatenation?: (ctx: PatternConcatenationContext) => void;
    /**
     * Exit a parse tree produced by the `patternConcatenation`
     * labeled alternative in `TrinoSQLParser.rowPattern`.
     * @param ctx the parse tree
     */
    exitPatternConcatenation?: (ctx: PatternConcatenationContext) => void;
    /**
     * Enter a parse tree produced by the `patternAlternation`
     * labeled alternative in `TrinoSQLParser.rowPattern`.
     * @param ctx the parse tree
     */
    enterPatternAlternation?: (ctx: PatternAlternationContext) => void;
    /**
     * Exit a parse tree produced by the `patternAlternation`
     * labeled alternative in `TrinoSQLParser.rowPattern`.
     * @param ctx the parse tree
     */
    exitPatternAlternation?: (ctx: PatternAlternationContext) => void;
    /**
     * Enter a parse tree produced by the `patternVariable`
     * labeled alternative in `TrinoSQLParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterPatternVariable?: (ctx: PatternVariableContext) => void;
    /**
     * Exit a parse tree produced by the `patternVariable`
     * labeled alternative in `TrinoSQLParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitPatternVariable?: (ctx: PatternVariableContext) => void;
    /**
     * Enter a parse tree produced by the `emptyPattern`
     * labeled alternative in `TrinoSQLParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterEmptyPattern?: (ctx: EmptyPatternContext) => void;
    /**
     * Exit a parse tree produced by the `emptyPattern`
     * labeled alternative in `TrinoSQLParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitEmptyPattern?: (ctx: EmptyPatternContext) => void;
    /**
     * Enter a parse tree produced by the `patternPermutation`
     * labeled alternative in `TrinoSQLParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterPatternPermutation?: (ctx: PatternPermutationContext) => void;
    /**
     * Exit a parse tree produced by the `patternPermutation`
     * labeled alternative in `TrinoSQLParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitPatternPermutation?: (ctx: PatternPermutationContext) => void;
    /**
     * Enter a parse tree produced by the `groupedPattern`
     * labeled alternative in `TrinoSQLParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterGroupedPattern?: (ctx: GroupedPatternContext) => void;
    /**
     * Exit a parse tree produced by the `groupedPattern`
     * labeled alternative in `TrinoSQLParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitGroupedPattern?: (ctx: GroupedPatternContext) => void;
    /**
     * Enter a parse tree produced by the `partitionStartAnchor`
     * labeled alternative in `TrinoSQLParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => void;
    /**
     * Exit a parse tree produced by the `partitionStartAnchor`
     * labeled alternative in `TrinoSQLParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitPartitionStartAnchor?: (ctx: PartitionStartAnchorContext) => void;
    /**
     * Enter a parse tree produced by the `partitionEndAnchor`
     * labeled alternative in `TrinoSQLParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => void;
    /**
     * Exit a parse tree produced by the `partitionEndAnchor`
     * labeled alternative in `TrinoSQLParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitPartitionEndAnchor?: (ctx: PartitionEndAnchorContext) => void;
    /**
     * Enter a parse tree produced by the `excludedPattern`
     * labeled alternative in `TrinoSQLParser.patternPrimary`.
     * @param ctx the parse tree
     */
    enterExcludedPattern?: (ctx: ExcludedPatternContext) => void;
    /**
     * Exit a parse tree produced by the `excludedPattern`
     * labeled alternative in `TrinoSQLParser.patternPrimary`.
     * @param ctx the parse tree
     */
    exitExcludedPattern?: (ctx: ExcludedPatternContext) => void;
    /**
     * Enter a parse tree produced by the `zeroOrMoreQuantifier`
     * labeled alternative in `TrinoSQLParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    enterZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => void;
    /**
     * Exit a parse tree produced by the `zeroOrMoreQuantifier`
     * labeled alternative in `TrinoSQLParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    exitZeroOrMoreQuantifier?: (ctx: ZeroOrMoreQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `oneOrMoreQuantifier`
     * labeled alternative in `TrinoSQLParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    enterOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => void;
    /**
     * Exit a parse tree produced by the `oneOrMoreQuantifier`
     * labeled alternative in `TrinoSQLParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    exitOneOrMoreQuantifier?: (ctx: OneOrMoreQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `zeroOrOneQuantifier`
     * labeled alternative in `TrinoSQLParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    enterZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => void;
    /**
     * Exit a parse tree produced by the `zeroOrOneQuantifier`
     * labeled alternative in `TrinoSQLParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    exitZeroOrOneQuantifier?: (ctx: ZeroOrOneQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `rangeQuantifier`
     * labeled alternative in `TrinoSQLParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    enterRangeQuantifier?: (ctx: RangeQuantifierContext) => void;
    /**
     * Exit a parse tree produced by the `rangeQuantifier`
     * labeled alternative in `TrinoSQLParser.patternQuantifier`.
     * @param ctx the parse tree
     */
    exitRangeQuantifier?: (ctx: RangeQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.updateAssignment`.
     * @param ctx the parse tree
     */
    enterUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.updateAssignment`.
     * @param ctx the parse tree
     */
    exitUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
    /**
     * Enter a parse tree produced by the `explainFormat`
     * labeled alternative in `TrinoSQLParser.explainOption`.
     * @param ctx the parse tree
     */
    enterExplainFormat?: (ctx: ExplainFormatContext) => void;
    /**
     * Exit a parse tree produced by the `explainFormat`
     * labeled alternative in `TrinoSQLParser.explainOption`.
     * @param ctx the parse tree
     */
    exitExplainFormat?: (ctx: ExplainFormatContext) => void;
    /**
     * Enter a parse tree produced by the `explainType`
     * labeled alternative in `TrinoSQLParser.explainOption`.
     * @param ctx the parse tree
     */
    enterExplainType?: (ctx: ExplainTypeContext) => void;
    /**
     * Exit a parse tree produced by the `explainType`
     * labeled alternative in `TrinoSQLParser.explainOption`.
     * @param ctx the parse tree
     */
    exitExplainType?: (ctx: ExplainTypeContext) => void;
    /**
     * Enter a parse tree produced by the `isolationLevel`
     * labeled alternative in `TrinoSQLParser.transactionMode`.
     * @param ctx the parse tree
     */
    enterIsolationLevel?: (ctx: IsolationLevelContext) => void;
    /**
     * Exit a parse tree produced by the `isolationLevel`
     * labeled alternative in `TrinoSQLParser.transactionMode`.
     * @param ctx the parse tree
     */
    exitIsolationLevel?: (ctx: IsolationLevelContext) => void;
    /**
     * Enter a parse tree produced by the `transactionAccessMode`
     * labeled alternative in `TrinoSQLParser.transactionMode`.
     * @param ctx the parse tree
     */
    enterTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
    /**
     * Exit a parse tree produced by the `transactionAccessMode`
     * labeled alternative in `TrinoSQLParser.transactionMode`.
     * @param ctx the parse tree
     */
    exitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
    /**
     * Enter a parse tree produced by the `readUncommitted`
     * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    enterReadUncommitted?: (ctx: ReadUncommittedContext) => void;
    /**
     * Exit a parse tree produced by the `readUncommitted`
     * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    exitReadUncommitted?: (ctx: ReadUncommittedContext) => void;
    /**
     * Enter a parse tree produced by the `readCommitted`
     * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    enterReadCommitted?: (ctx: ReadCommittedContext) => void;
    /**
     * Exit a parse tree produced by the `readCommitted`
     * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    exitReadCommitted?: (ctx: ReadCommittedContext) => void;
    /**
     * Enter a parse tree produced by the `repeatableRead`
     * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    enterRepeatableRead?: (ctx: RepeatableReadContext) => void;
    /**
     * Exit a parse tree produced by the `repeatableRead`
     * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    exitRepeatableRead?: (ctx: RepeatableReadContext) => void;
    /**
     * Enter a parse tree produced by the `serializable`
     * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    enterSerializable?: (ctx: SerializableContext) => void;
    /**
     * Exit a parse tree produced by the `serializable`
     * labeled alternative in `TrinoSQLParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    exitSerializable?: (ctx: SerializableContext) => void;
    /**
     * Enter a parse tree produced by the `positionalArgument`
     * labeled alternative in `TrinoSQLParser.callArgument`.
     * @param ctx the parse tree
     */
    enterPositionalArgument?: (ctx: PositionalArgumentContext) => void;
    /**
     * Exit a parse tree produced by the `positionalArgument`
     * labeled alternative in `TrinoSQLParser.callArgument`.
     * @param ctx the parse tree
     */
    exitPositionalArgument?: (ctx: PositionalArgumentContext) => void;
    /**
     * Enter a parse tree produced by the `namedArgument`
     * labeled alternative in `TrinoSQLParser.callArgument`.
     * @param ctx the parse tree
     */
    enterNamedArgument?: (ctx: NamedArgumentContext) => void;
    /**
     * Exit a parse tree produced by the `namedArgument`
     * labeled alternative in `TrinoSQLParser.callArgument`.
     * @param ctx the parse tree
     */
    exitNamedArgument?: (ctx: NamedArgumentContext) => void;
    /**
     * Enter a parse tree produced by the `qualifiedArgument`
     * labeled alternative in `TrinoSQLParser.pathElement`.
     * @param ctx the parse tree
     */
    enterQualifiedArgument?: (ctx: QualifiedArgumentContext) => void;
    /**
     * Exit a parse tree produced by the `qualifiedArgument`
     * labeled alternative in `TrinoSQLParser.pathElement`.
     * @param ctx the parse tree
     */
    exitQualifiedArgument?: (ctx: QualifiedArgumentContext) => void;
    /**
     * Enter a parse tree produced by the `unqualifiedArgument`
     * labeled alternative in `TrinoSQLParser.pathElement`.
     * @param ctx the parse tree
     */
    enterUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => void;
    /**
     * Exit a parse tree produced by the `unqualifiedArgument`
     * labeled alternative in `TrinoSQLParser.pathElement`.
     * @param ctx the parse tree
     */
    exitUnqualifiedArgument?: (ctx: UnqualifiedArgumentContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.pathSpecification`.
     * @param ctx the parse tree
     */
    enterPathSpecification?: (ctx: PathSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.pathSpecification`.
     * @param ctx the parse tree
     */
    exitPathSpecification?: (ctx: PathSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.functionSpecification`.
     * @param ctx the parse tree
     */
    enterFunctionSpecification?: (ctx: FunctionSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.functionSpecification`.
     * @param ctx the parse tree
     */
    exitFunctionSpecification?: (ctx: FunctionSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.functionDeclaration`.
     * @param ctx the parse tree
     */
    enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.functionDeclaration`.
     * @param ctx the parse tree
     */
    exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.parameterDeclaration`.
     * @param ctx the parse tree
     */
    enterParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.parameterDeclaration`.
     * @param ctx the parse tree
     */
    exitParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.returnsClause`.
     * @param ctx the parse tree
     */
    enterReturnsClause?: (ctx: ReturnsClauseContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.returnsClause`.
     * @param ctx the parse tree
     */
    exitReturnsClause?: (ctx: ReturnsClauseContext) => void;
    /**
     * Enter a parse tree produced by the `languageCharacteristic`
     * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    enterLanguageCharacteristic?: (ctx: LanguageCharacteristicContext) => void;
    /**
     * Exit a parse tree produced by the `languageCharacteristic`
     * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    exitLanguageCharacteristic?: (ctx: LanguageCharacteristicContext) => void;
    /**
     * Enter a parse tree produced by the `deterministicCharacteristic`
     * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    enterDeterministicCharacteristic?: (ctx: DeterministicCharacteristicContext) => void;
    /**
     * Exit a parse tree produced by the `deterministicCharacteristic`
     * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    exitDeterministicCharacteristic?: (ctx: DeterministicCharacteristicContext) => void;
    /**
     * Enter a parse tree produced by the `returnsNullOnNullInputCharacteristic`
     * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    enterReturnsNullOnNullInputCharacteristic?: (ctx: ReturnsNullOnNullInputCharacteristicContext) => void;
    /**
     * Exit a parse tree produced by the `returnsNullOnNullInputCharacteristic`
     * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    exitReturnsNullOnNullInputCharacteristic?: (ctx: ReturnsNullOnNullInputCharacteristicContext) => void;
    /**
     * Enter a parse tree produced by the `calledOnNullInputCharacteristic`
     * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    enterCalledOnNullInputCharacteristic?: (ctx: CalledOnNullInputCharacteristicContext) => void;
    /**
     * Exit a parse tree produced by the `calledOnNullInputCharacteristic`
     * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    exitCalledOnNullInputCharacteristic?: (ctx: CalledOnNullInputCharacteristicContext) => void;
    /**
     * Enter a parse tree produced by the `securityCharacteristic`
     * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    enterSecurityCharacteristic?: (ctx: SecurityCharacteristicContext) => void;
    /**
     * Exit a parse tree produced by the `securityCharacteristic`
     * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    exitSecurityCharacteristic?: (ctx: SecurityCharacteristicContext) => void;
    /**
     * Enter a parse tree produced by the `commentCharacteristic`
     * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    enterCommentCharacteristic?: (ctx: CommentCharacteristicContext) => void;
    /**
     * Exit a parse tree produced by the `commentCharacteristic`
     * labeled alternative in `TrinoSQLParser.routineCharacteristic`.
     * @param ctx the parse tree
     */
    exitCommentCharacteristic?: (ctx: CommentCharacteristicContext) => void;
    /**
     * Enter a parse tree produced by the `returnStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Exit a parse tree produced by the `returnStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Enter a parse tree produced by the `assignmentStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
    /**
     * Exit a parse tree produced by the `assignmentStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
    /**
     * Enter a parse tree produced by the `simpleCaseStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterSimpleCaseStatement?: (ctx: SimpleCaseStatementContext) => void;
    /**
     * Exit a parse tree produced by the `simpleCaseStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitSimpleCaseStatement?: (ctx: SimpleCaseStatementContext) => void;
    /**
     * Enter a parse tree produced by the `searchedCaseStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterSearchedCaseStatement?: (ctx: SearchedCaseStatementContext) => void;
    /**
     * Exit a parse tree produced by the `searchedCaseStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitSearchedCaseStatement?: (ctx: SearchedCaseStatementContext) => void;
    /**
     * Enter a parse tree produced by the `ifStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Exit a parse tree produced by the `ifStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Enter a parse tree produced by the `iterateStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterIterateStatement?: (ctx: IterateStatementContext) => void;
    /**
     * Exit a parse tree produced by the `iterateStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitIterateStatement?: (ctx: IterateStatementContext) => void;
    /**
     * Enter a parse tree produced by the `leaveStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterLeaveStatement?: (ctx: LeaveStatementContext) => void;
    /**
     * Exit a parse tree produced by the `leaveStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitLeaveStatement?: (ctx: LeaveStatementContext) => void;
    /**
     * Enter a parse tree produced by the `compoundStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterCompoundStatement?: (ctx: CompoundStatementContext) => void;
    /**
     * Exit a parse tree produced by the `compoundStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitCompoundStatement?: (ctx: CompoundStatementContext) => void;
    /**
     * Enter a parse tree produced by the `loopStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterLoopStatement?: (ctx: LoopStatementContext) => void;
    /**
     * Exit a parse tree produced by the `loopStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitLoopStatement?: (ctx: LoopStatementContext) => void;
    /**
     * Enter a parse tree produced by the `whileStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Exit a parse tree produced by the `whileStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Enter a parse tree produced by the `repeatStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    enterRepeatStatement?: (ctx: RepeatStatementContext) => void;
    /**
     * Exit a parse tree produced by the `repeatStatement`
     * labeled alternative in `TrinoSQLParser.controlStatement`.
     * @param ctx the parse tree
     */
    exitRepeatStatement?: (ctx: RepeatStatementContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.caseStatementWhenClause`.
     * @param ctx the parse tree
     */
    enterCaseStatementWhenClause?: (ctx: CaseStatementWhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.caseStatementWhenClause`.
     * @param ctx the parse tree
     */
    exitCaseStatementWhenClause?: (ctx: CaseStatementWhenClauseContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.elseIfClause`.
     * @param ctx the parse tree
     */
    enterElseIfClause?: (ctx: ElseIfClauseContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.elseIfClause`.
     * @param ctx the parse tree
     */
    exitElseIfClause?: (ctx: ElseIfClauseContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.elseClause`.
     * @param ctx the parse tree
     */
    enterElseClause?: (ctx: ElseClauseContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.elseClause`.
     * @param ctx the parse tree
     */
    exitElseClause?: (ctx: ElseClauseContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.variableDeclaration`.
     * @param ctx the parse tree
     */
    enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.variableDeclaration`.
     * @param ctx the parse tree
     */
    exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.sqlStatementList`.
     * @param ctx the parse tree
     */
    enterSqlStatementList?: (ctx: SqlStatementListContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.sqlStatementList`.
     * @param ctx the parse tree
     */
    exitSqlStatementList?: (ctx: SqlStatementListContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.privilege`.
     * @param ctx the parse tree
     */
    enterPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.privilege`.
     * @param ctx the parse tree
     */
    exitPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.entityKind`.
     * @param ctx the parse tree
     */
    enterEntityKind?: (ctx: EntityKindContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.entityKind`.
     * @param ctx the parse tree
     */
    exitEntityKind?: (ctx: EntityKindContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.grantObject`.
     * @param ctx the parse tree
     */
    enterGrantObject?: (ctx: GrantObjectContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.grantObject`.
     * @param ctx the parse tree
     */
    exitGrantObject?: (ctx: GrantObjectContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.queryPeriod`.
     * @param ctx the parse tree
     */
    enterQueryPeriod?: (ctx: QueryPeriodContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.queryPeriod`.
     * @param ctx the parse tree
     */
    exitQueryPeriod?: (ctx: QueryPeriodContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.rangeType`.
     * @param ctx the parse tree
     */
    enterRangeType?: (ctx: RangeTypeContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.rangeType`.
     * @param ctx the parse tree
     */
    exitRangeType?: (ctx: RangeTypeContext) => void;
    /**
     * Enter a parse tree produced by the `specifiedPrincipal`
     * labeled alternative in `TrinoSQLParser.grantor`.
     * @param ctx the parse tree
     */
    enterSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => void;
    /**
     * Exit a parse tree produced by the `specifiedPrincipal`
     * labeled alternative in `TrinoSQLParser.grantor`.
     * @param ctx the parse tree
     */
    exitSpecifiedPrincipal?: (ctx: SpecifiedPrincipalContext) => void;
    /**
     * Enter a parse tree produced by the `currentUserGrantor`
     * labeled alternative in `TrinoSQLParser.grantor`.
     * @param ctx the parse tree
     */
    enterCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => void;
    /**
     * Exit a parse tree produced by the `currentUserGrantor`
     * labeled alternative in `TrinoSQLParser.grantor`.
     * @param ctx the parse tree
     */
    exitCurrentUserGrantor?: (ctx: CurrentUserGrantorContext) => void;
    /**
     * Enter a parse tree produced by the `currentRoleGrantor`
     * labeled alternative in `TrinoSQLParser.grantor`.
     * @param ctx the parse tree
     */
    enterCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => void;
    /**
     * Exit a parse tree produced by the `currentRoleGrantor`
     * labeled alternative in `TrinoSQLParser.grantor`.
     * @param ctx the parse tree
     */
    exitCurrentRoleGrantor?: (ctx: CurrentRoleGrantorContext) => void;
    /**
     * Enter a parse tree produced by the `unspecifiedPrincipal`
     * labeled alternative in `TrinoSQLParser.principal`.
     * @param ctx the parse tree
     */
    enterUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => void;
    /**
     * Exit a parse tree produced by the `unspecifiedPrincipal`
     * labeled alternative in `TrinoSQLParser.principal`.
     * @param ctx the parse tree
     */
    exitUnspecifiedPrincipal?: (ctx: UnspecifiedPrincipalContext) => void;
    /**
     * Enter a parse tree produced by the `userPrincipal`
     * labeled alternative in `TrinoSQLParser.principal`.
     * @param ctx the parse tree
     */
    enterUserPrincipal?: (ctx: UserPrincipalContext) => void;
    /**
     * Exit a parse tree produced by the `userPrincipal`
     * labeled alternative in `TrinoSQLParser.principal`.
     * @param ctx the parse tree
     */
    exitUserPrincipal?: (ctx: UserPrincipalContext) => void;
    /**
     * Enter a parse tree produced by the `rolePrincipal`
     * labeled alternative in `TrinoSQLParser.principal`.
     * @param ctx the parse tree
     */
    enterRolePrincipal?: (ctx: RolePrincipalContext) => void;
    /**
     * Exit a parse tree produced by the `rolePrincipal`
     * labeled alternative in `TrinoSQLParser.principal`.
     * @param ctx the parse tree
     */
    exitRolePrincipal?: (ctx: RolePrincipalContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.roles`.
     * @param ctx the parse tree
     */
    enterRoles?: (ctx: RolesContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.roles`.
     * @param ctx the parse tree
     */
    exitRoles?: (ctx: RolesContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.privilegeOrRole`.
     * @param ctx the parse tree
     */
    enterPrivilegeOrRole?: (ctx: PrivilegeOrRoleContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.privilegeOrRole`.
     * @param ctx the parse tree
     */
    exitPrivilegeOrRole?: (ctx: PrivilegeOrRoleContext) => void;
    /**
     * Enter a parse tree produced by the `unquotedIdentifier`
     * labeled alternative in `TrinoSQLParser.identifier`.
     * @param ctx the parse tree
     */
    enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `unquotedIdentifier`
     * labeled alternative in `TrinoSQLParser.identifier`.
     * @param ctx the parse tree
     */
    exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `quotedIdentifier`
     * labeled alternative in `TrinoSQLParser.identifier`.
     * @param ctx the parse tree
     */
    enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `quotedIdentifier`
     * labeled alternative in `TrinoSQLParser.identifier`.
     * @param ctx the parse tree
     */
    exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `backQuotedIdentifier`
     * labeled alternative in `TrinoSQLParser.identifier`.
     * @param ctx the parse tree
     */
    enterBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `backQuotedIdentifier`
     * labeled alternative in `TrinoSQLParser.identifier`.
     * @param ctx the parse tree
     */
    exitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `digitIdentifier`
     * labeled alternative in `TrinoSQLParser.identifier`.
     * @param ctx the parse tree
     */
    enterDigitIdentifier?: (ctx: DigitIdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `digitIdentifier`
     * labeled alternative in `TrinoSQLParser.identifier`.
     * @param ctx the parse tree
     */
    exitDigitIdentifier?: (ctx: DigitIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `decimalLiteral`
     * labeled alternative in `TrinoSQLParser.number`.
     * @param ctx the parse tree
     */
    enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `decimalLiteral`
     * labeled alternative in `TrinoSQLParser.number`.
     * @param ctx the parse tree
     */
    exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `doubleLiteral`
     * labeled alternative in `TrinoSQLParser.number`.
     * @param ctx the parse tree
     */
    enterDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `doubleLiteral`
     * labeled alternative in `TrinoSQLParser.number`.
     * @param ctx the parse tree
     */
    exitDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `integerLiteral`
     * labeled alternative in `TrinoSQLParser.number`.
     * @param ctx the parse tree
     */
    enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `integerLiteral`
     * labeled alternative in `TrinoSQLParser.number`.
     * @param ctx the parse tree
     */
    exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `identifierUser`
     * labeled alternative in `TrinoSQLParser.authorizationUser`.
     * @param ctx the parse tree
     */
    enterIdentifierUser?: (ctx: IdentifierUserContext) => void;
    /**
     * Exit a parse tree produced by the `identifierUser`
     * labeled alternative in `TrinoSQLParser.authorizationUser`.
     * @param ctx the parse tree
     */
    exitIdentifierUser?: (ctx: IdentifierUserContext) => void;
    /**
     * Enter a parse tree produced by the `stringUser`
     * labeled alternative in `TrinoSQLParser.authorizationUser`.
     * @param ctx the parse tree
     */
    enterStringUser?: (ctx: StringUserContext) => void;
    /**
     * Exit a parse tree produced by the `stringUser`
     * labeled alternative in `TrinoSQLParser.authorizationUser`.
     * @param ctx the parse tree
     */
    exitStringUser?: (ctx: StringUserContext) => void;
    /**
     * Enter a parse tree produced by `TrinoSQLParser.nonReserved`.
     * @param ctx the parse tree
     */
    enterNonReserved?: (ctx: NonReservedContext) => void;
    /**
     * Exit a parse tree produced by `TrinoSQLParser.nonReserved`.
     * @param ctx the parse tree
     */
    exitNonReserved?: (ctx: NonReservedContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

